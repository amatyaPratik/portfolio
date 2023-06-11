import { Component, OnInit, OnDestroy, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import {distinctUntilChanged, filter, map} from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'pratik';
  now = new Date().toLocaleTimeString()
  timeUpdateInterval!: any
  // renderer: Renderer2
  activeRoute!: string 
  routesInOrder = ['/about-me','/education','/career','/arts','/literature','/favorites']
  @ViewChild('hint') hint!:ElementRef

  constructor(
    public el: ElementRef, 
    public renderer: Renderer2, 
    private router: Router,
    private route: ActivatedRoute
    ) { 
    renderer.listen('document', 'keydown', (event) => { 
      const currentPage = window.location.pathname; 
      let routeIndex = this.routesInOrder.indexOf(currentPage) 
      if(event.key==='ArrowRight')  
        router.navigate([this.routesInOrder[(routeIndex+1)%this.routesInOrder.length]])  
      if(event.key==='ArrowLeft')  
        router.navigate([this.routesInOrder[((routeIndex-1)%this.routesInOrder.length)<0?(this.routesInOrder.length-1):(routeIndex-1)%this.routesInOrder.length]]) 
    });
 }

  ngOnInit(): void {
    this.timeUpdateInterval = setInterval(this.updateTime,1000) 

    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd),distinctUntilChanged())
    .subscribe(() => {      
      this.switchMenu()
      this.hint.nativeElement.textContent = (this.router.url).substring(1,this.router.url.length)
      setTimeout(()=>{
        this.hint.nativeElement.textContent = ''
      },1000)
    });
  }

  updateTime(){
    this.now = new Date().toLocaleTimeString() 
    return this.now
  }

  switchMenu(){
    const audio = new Audio('./assets/sounds/switch.mp3');
    audio.play()
  } 

  ngOnDestroy(){
    clearInterval(this.timeUpdateInterval)
  }
}

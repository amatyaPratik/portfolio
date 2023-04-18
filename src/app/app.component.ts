import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'pratik';
  now = new Date().toLocaleTimeString()
  timeUpdateInterval!: any

  ngOnInit(): void {
    this.timeUpdateInterval = setInterval(this.updateTime,1000)
  }

  updateTime(){
    this.now = new Date().toLocaleTimeString()
    // console.log('this.now: ',this.now); 
    return this.now
  }

  ngOnDestroy(){
    clearInterval(this.timeUpdateInterval)
  }
}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-arts',
  templateUrl: './arts.component.html',
  styleUrls: ['./arts.component.css']
})
export class ArtsComponent implements OnInit {

  @ViewChild('artContainer') artContainer !:ElementRef
  constructor() { }

  ngOnInit() {
  }

  toggle(event:any){
    console.log('toggl: ',event.target.innerText)
    if(event.target.innerText.toLowerCase()==='photos')
      this.artContainer.nativeElement.style.left = '0%'
    else if(event.target.innerText.toLowerCase()==='drawings')
      this.artContainer.nativeElement.style.left = '-90vw'
    else  
      this.artContainer.nativeElement.style.left = '-180vw'
  
  const h3 = document.getElementsByClassName('toggler-heading') 
  console.log(h3[0])

  h3[0].classList.remove('active')
  h3[1].classList.remove('active') 
  h3[2].classList.remove('active') 
  event.target.classList.add('active')
  }
}

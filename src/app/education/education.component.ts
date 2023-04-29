import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  @ViewChild('content') content !:ElementRef

  constructor() { }

  ngOnInit() {
  }

  toggle(event:any){
    console.log('toggl: ',event.target.innerText)
    if(event.target.innerText.toLowerCase()==='education')
      this.content.nativeElement.style.left = '0%'
    else
      this.content.nativeElement.style.left = '-100%'
  
  const h3 = document.getElementsByClassName('toggler-heading') 
  console.log(h3[0])

  h3[0].classList.remove('active')
  h3[1].classList.remove('active') 
  event.target.classList.add('active')
  }

}

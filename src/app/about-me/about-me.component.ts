import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  username = 'Pratik Amatya'
  role = 'Admin'
  email= 'pratikamatya78@gmail.com'
  password= 'whyw0uldItellYoU?'
  dob = '1996/04/1'

  constructor(private router: Router) { }

  ngOnInit() {
  }

  reRoute(url: string){
    console.log('url');
    
    window.location.replace(url)
  }
}

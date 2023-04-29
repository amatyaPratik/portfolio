import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() name:string = ''
  @Input() cover:string=''

  constructor() { }

  ngOnInit() {
  }
}

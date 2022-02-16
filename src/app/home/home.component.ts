import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  mode=1;

  constructor() { }

  ngOnInit(): void {
  }
  tuteur(){
    this.mode=1;
  }
  ecole(){
    this.mode=2;
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  data: any =[];

  constructor() { }

  ngOnInit(): void {
    if(localStorage['loginInfo']){
      this.data = JSON.parse(localStorage.getItem('loginInfo'));
    }

  }
}

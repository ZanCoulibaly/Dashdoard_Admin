import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Tutorat by Zan';
  sideBarOpen: boolean = true;
  data:any =[];
  loginStatus : number = 2;

  public constructor(private route: Router){}

  ngOnInit(): void {
    console.log(this.loginStatus)
    if(localStorage['Status']){
      this.loginStatus= 1
      console.log(this.loginStatus)
    }

    if(localStorage['loginInfo']!=""){

      this.data = JSON.parse(localStorage.getItem('loginInfo'));
    }

 }

 sideBarToggler() {
  //  window.location.reload();
    this.sideBarOpen = !this.sideBarOpen;

  }
}

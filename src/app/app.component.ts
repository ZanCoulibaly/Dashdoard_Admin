import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Tutorat by Zan';
  sideBarOpen: boolean;
  data:any =[];

  ngOnInit(): void {
      if(localStorage['fail']){
        this.sideBarOpen= false;
      }else{
        this.sideBarOpen= true;
      }

      this.data= JSON.parse(localStorage.getItem('loginInfo'))
 }
 sideBarToggler() {
  //  window.location.reload();
    this.sideBarOpen = !this.sideBarOpen;

  }
}

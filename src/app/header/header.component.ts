import { ServicesService } from './../api/services.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  data: any =[];

  constructor(private route: Router, private service: ServicesService) {}

  ngOnInit(): void {

    if(localStorage.getItem('loginInfo')){
      this.data = JSON.parse(localStorage.getItem('loginInfo'));
    }
  }

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }


  LogOut(){
    localStorage.clear();
    window.location.reload();
    this.route.navigate(['login'])
  }
}

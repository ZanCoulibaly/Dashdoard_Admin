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
  data: any= []
  constructor(private router: Router, private service: ServicesService) {}

  ngOnInit(): void {
    this.data= JSON.parse(localStorage.getItem('loginInfo'))
    console.log(this.data);

  }

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }


  LogOut(){
    this.service.logout()
  }
}

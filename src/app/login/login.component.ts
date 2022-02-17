import { Router } from '@angular/router';
import { ServicesService } from './../api/services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: any;
  password: any;
  data: any
  // Statut: boolean;
  constructor(
     public service: ServicesService,
     public route: Router

     ) { }

  ngOnInit(): void {
  }

  loginPass(data){
    this.service.loginPassword(data.value.login, data.value.password).subscribe(donne =>{
      console.log(donne);
      if(donne==""){
        return console.error("mot de pass ou numéro incorrect")
      }else{
        let satatus : number = 1;
        localStorage.setItem('loginInfo', JSON.stringify(donne))
        localStorage.setItem('Status', JSON.stringify(satatus))
        //this.service.Activiter(donne[0].id)
        this.route.navigate(['home'])
      }

    })
  }
}

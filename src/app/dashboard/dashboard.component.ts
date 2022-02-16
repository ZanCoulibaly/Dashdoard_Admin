import { Router, NavigationExtras } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../api/services.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  list: any;
  delet: any;
  stocData: any;
  del: any;


  mode= 1;
  constructor(
    private routes: Router,
    public service: ServicesService
    ) {
      this.listess();


  }

  ngOnInit(): void {

  }

    listess(){
     return this.service.listerTuteur().subscribe((data: any)=>{
       console.log(data);
       this.list= data;
      })
    }

    supprimerId(id:any){
      return this.service.deleteTuteur(id).subscribe(
        data=>{
          window.location.reload();
          console.log(data);
        })
    }
    getDetails(id:any){
      return this.service.detailsTuteur(id).subscribe(
        data1=>{
          this.stocData=JSON.parse(data1);
          console.log(this.stocData);
          this.mode=2;
      })

    }
    editer(id:any){
      return this.service.detailsTuteur(id).subscribe(
        data2=>{
          this.del=JSON.parse(data2);
          console.log(this.del);
          this.mode=3


        }
      )

    }
    retour(){
      this.mode=1
    }
    modify(id: any){
      this.mode=3;
    }


}


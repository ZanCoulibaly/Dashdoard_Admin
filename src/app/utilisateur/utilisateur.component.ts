import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../api/services.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.scss']
})
export class UtilisateurComponent implements OnInit {

  list: any;
  mode= 1;
  donne: any;
  delta: any;

  constructor(
    private router: Router,
    public service: ServicesService
  ) {
    this.listess();
  }

  ngOnInit(): void {
  }


  listess(){
    return this.service.listerParent().subscribe((data: any)=>{
      console.log(data);
      this.list= data;
     })
   }

   supprimerId(id:any){
     return this.service.deleteParent(id).subscribe(
       data=>{
         window.location.reload();
         console.log(data);
         // this.listess();
       })
   }
   getDetails(id:any){
     return this.service.detailsParent(id).subscribe(
       data1=>{
        this.donne=JSON.parse(data1)
         console.log(this.donne);
         this.mode= 2;
         // this.listess();
     })
   }
   editer(id:any){
     return this.service.detailsParent(id).subscribe(
       data2=>{
        this.delta=JSON.parse(data2);
         console.log(this.delta);
         this.mode= 3;

       }
     )
   }


   back1(){
     this.mode=1;
   }
}

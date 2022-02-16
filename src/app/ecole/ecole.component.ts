import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../api/services.service';

@Component({
  selector: 'app-ecole',
  templateUrl: './ecole.component.html',
  styleUrls: ['./ecole.component.scss']
})
export class EcoleComponent implements OnInit {
  list: any;
  mode= 1;
  donne: any;

  constructor(
    private router: Router,
    public service: ServicesService
  ) {
    this.listess();
  }

  ngOnInit(): void {
  }


  listess(){
    return this.service.listerEcole().subscribe((data: any)=>{
      console.log(data);
      this.list= data;
     })
   }

   supprimerId(id:any){
     return this.service.deleteEcole(id).subscribe(
       data=>{
         window.location.reload();
         console.log(data);
         // this.listess();
       })
   }
   getDetails(id:any){
     return this.service.detailsEcole(id).subscribe(
       data1=>{
        this.donne=JSON.parse(data1)
         console.log(this.donne);
         this.mode= 2;
         // this.listess();
     })
   }
   editer(id:any, ecole:String){
     return this.service.modifierEcole(id, ecole).subscribe(
       data2=>{
        //  window.location.reload();
         console.log(data2);
         this.mode= 3;

       }
     )
   }
   back1(){
     this.mode=1;
   }
}

import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../api/services.service';

@Component({
  selector: 'app-corbeille',
  templateUrl: './corbeille.component.html',
  styleUrls: ['./corbeille.component.scss']
})
export class CorbeilleComponent implements OnInit {
    list: any;
    id: any;

  constructor(private service: ServicesService) {
    this.listePoubelle();
   }

  ngOnInit(): void {
  }

  listePoubelle(){
    return this.service.listeCorbeille().subscribe(
      data=>{
        // window.location.reload();
        console.log(data);
        this.list=data;
      }
    )
  }
  recuperation(id:any){
    return this.service.recupereUsers(id).subscribe(
      data1=>{
        window.location.reload();
        console.log(data1);
        this.listePoubelle();
      }
    )
  }
}

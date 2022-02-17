import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  host: String ='http://localhost:8080/api';

  constructor(private http: HttpClient, private route: Router) { }

  // Tuteur service operation
  listerTuteur(){
   return this.http.get(this.host+"/liste/tuteur");
  }
  detailsTuteur(id:any){
    return this.http.get(this.host+"/trouver/"+id, {responseType:'text'});
  }
  deleteTuteur(id:any){
    return this.http.put(this.host+"/del/" + id, {responseType:'text'});
  }
  modifierTuteur(id:any, tuteur:String){
    return this.http.put(this.host+"/modify/tuteur/"+id/+tuteur, {responseType:'text'})
  }

  // Parent service operation
  listerParent(){
    return this.http.get(this.host+"/liste/users");
   }
   detailsParent(id:any){
     return this.http.get(this.host+"/trouver/"+id, {responseType:'text'});
   }
   deleteParent(id:any){
     return this.http.put(this.host+"/del/" + id, {responseType:'text'});
   }
  modifierParent(id:any, parent:String){
    return this.http.put(this.host+"/modify/parent/"+id/+parent, {responseType:'text'})
  }



  // Eleve service operation
  // listerEleve(){
  //   return this.http.get(this.host+"/liste/eleve");
  //  }
  //  detailsEleve(id:any){
  //    return this.http.get(this.host+"/trouver/"+id, {responseType:'text'});
  //  }
  //  deleteEleve(id:any){
  //    return this.http.put(this.host+"/del/" + id, {responseType:'text'});
  //  }
  // modifierEleve(id:any, eleve:String){
  //   return this.http.put(this.host+"/modify/eleve/"+id/+eleve, {responseType:'text'})
  // }


// Ecole service operation
  listerEcole(){
    return this.http.get(this.host+"/liste/ecole");
   }
  deleteEcole(id:any){
    return this.http.put(this.host+"/del/" + id, {responseType:'text'});
  }

  detailsEcole(id:any){
    return this.http.get(this.host+"/trouver/"+id, {responseType:'text'});
  }
  modifierEcole(id:any, ecole:String){
    return this.http.put(this.host+"/modify/"+id/+ecole, {responseType:'text'})
  }


  // corbeille
  listeCorbeille(){
    return this.http.get(this.host+"/liste/del");
  }
  recupereUsers(id:any){
    return this.http.put(this.host+"/restore/"+id, {reponseType:'text'});
  }

  loginPassword(numero: any, password: any){
   return this.http.get(this.host+'/login/'+numero+'/'+password);
  }

  Activiter(id: any){
    return this.http.put(this.host+"/activity/"+id, {reponseType:'text'})
  }

  logout(){
    localStorage.removeItem('loginInfo');
    localStorage.removeItem('loginStatus');
    this.route.navigate(['login'])
  }
}

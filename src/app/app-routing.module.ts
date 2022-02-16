import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CorbeilleComponent } from './corbeille/corbeille.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EcoleComponent } from './ecole/ecole.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'utilisateur', component: UtilisateurComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'ecole', component: EcoleComponent },
  { path: 'corbeille', component: CorbeilleComponent },
  { path: 'login', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

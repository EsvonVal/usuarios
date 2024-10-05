import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { FormLogingComponent } from './form-loging/form-loging.component';
import { FormRegisterComponent } from './form-register/form-register.component'; 
import { PerfilUsarioComponent } from './perfil-usario/perfil-usario.component'; 

const routes: Routes = [
  {path: '', redirectTo: '/form-loging', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  {path: 'form-loging', component: FormLogingComponent},
  {path: 'form-register', component: FormRegisterComponent},
  { path: 'perfil-usuario', component: PerfilUsarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

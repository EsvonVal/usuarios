import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormLogingComponent } from './form-loging/form-loging.component';
import { FormRegisterComponent } from './form-register/form-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PerfilUsarioComponent } from './perfil-usario/perfil-usario.component';
import { HomeComponent } from './home/home.component';
import { NewItemComponent } from './new-item/new-item.component';
import { TasksComponent } from './tasks/tasks.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormLogingComponent,
    FormRegisterComponent,
    PerfilUsarioComponent,
    HomeComponent,
    NewItemComponent,
    TasksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export interface Usuario { 
  name: string,
  id: void
  email:string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
private readonly api= 'https://back-task-app-3d0f812edc8b.herokuapp.com/'

  constructor(private readonly http: HttpClient) { }

  getUsers():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.api+"api/users")
  }
  
  addNewUser(usuario:Usuario):Observable<Usuario>{
  const body=usuario;
    return this.http.post<Usuario>(this.api+"api/users", body)
  }
  

}

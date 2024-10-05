import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface SignUpRequest {
  email: string;
  password: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface TokenResponse {
  accessToken: string;
  refreshToken: string;
}

// Asegúrate de que la interfaz Usuario esté aquí
export interface Usuario {
  name?: string;
  email: string;
  password: string;
  id?: number; // o cualquier tipo que necesites para el id
}

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private readonly api = 'https://back-task-app-3d0f812edc8b.herokuapp.com/';

  constructor(private readonly http: HttpClient) { }

  Signup(request: SignUpRequest): Observable<string> {
    return this.http.post<string>(`${this.api}api/auth/signup`, request, { responseType: 'text' as 'json' });
  }
  
  

  Login(request: LoginRequest): Observable<TokenResponse> {
    return this.http.post<TokenResponse>(`${this.api}api/auth/login`, request);
  }

  Logout(token: string): Observable<string> {
    return this.http.post<string>(`${this.api}api/auth/logout`, {}, {
      headers: { Authorization: token }
    });
  }

  RefreshToken(request: { refreshToken: string }): Observable<TokenResponse> {
    return this.http.post<TokenResponse>(`${this.api}api/auth/refresh`, request);
  }
}

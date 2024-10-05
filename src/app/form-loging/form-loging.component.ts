import { Component, OnInit } from '@angular/core';
import { DataServiceService, LoginRequest, TokenResponse } from '../data-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Importar Router
@Component({
  selector: 'app-form-loging',
  templateUrl: './form-loging.component.html',
  styleUrls: ['./form-loging.component.css']
})
export class FormLogingComponent implements OnInit {
  loging!: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly datasv: DataServiceService,
    private readonly router: Router // Inyectar Router
  ) { }

  ngOnInit(): void {
    this.loging = this.initForm();
  }

  initForm(): FormGroup { 
    return this.fb.group({ 
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(5)]]
    });
  }

  onLogin(): void {
    if (this.loging.valid) {
      const loginRequest: LoginRequest = {
        email: this.loging.get('email')?.value,
        password: this.loging.get('password')?.value
      };

      this.datasv.Login(loginRequest).subscribe(
        (response: TokenResponse) => {
          // Manejar el inicio de sesión exitoso, por ejemplo, almacenar el token
          console.log('Inicio de sesión exitoso', response);
          alert('Inicio de sesión exitoso');
           
          // Redirigir a la ruta /home
          this.router.navigate(['/home']); // Agregar esta línea

        },
        (error) => {
          // Manejar errores de inicio de sesión
          console.error('Error en el inicio de sesión:', error);
          alert('Usuario o contraseña incorrectos');
        }
      );
    } else { 
      alert("Formulario no válido, revisa los campos");
    }
  }
}

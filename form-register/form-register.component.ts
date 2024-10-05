import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataServiceService, SignUpRequest, Usuario } from '../data-service.service'; // Asegúrate de que estás importando todo correctamente

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit {
  reactive!: FormGroup;
  @Output() NewUserEvent = new EventEmitter<Usuario>();

  constructor(
    private readonly fb: FormBuilder,
    private readonly dataService: DataServiceService // Inyecta el servicio
  ) { }

  ngOnInit(): void {
    this.reactive = this.initForm();
  }

  initForm(): FormGroup {
    return this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      name: ["", [Validators.required, Validators.minLength(4)]],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
  }

  onAddNewUser(): void {
    if (this.reactive.valid) {
      const formValues: SignUpRequest = {
        email: this.reactive.value.email,
        password: this.reactive.value.password
      };

      this.dataService.Signup(formValues).subscribe(
        response => {
          console.log('Usuario registrado:', response); // Esto ahora será un string
          alert(response); // Muestra el mensaje de éxito al usuario
          this.NewUserEvent.emit({
            ...formValues,
            name: this.reactive.value.name,
            id: undefined // Maneja el ID según sea necesario
          });
          this.reactive.reset(); // Resetea el formulario
        },
        error => {
          console.error('Error al registrar usuario:', error);
          let errorMessage = 'Error en el registro';
          if (error.error) {
            errorMessage = error.error; // Captura el mensaje de error si hay uno
          }
          alert(errorMessage); // Muestra el mensaje de error
        }
      );
      
    } else {
      this.reactive.markAllAsTouched();
    }
  }
}

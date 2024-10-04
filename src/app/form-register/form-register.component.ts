import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { Usuario } from '../data-service.service';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit {
reactive!: FormGroup;
@Output() NewUserEvent= new EventEmitter<Usuario>()

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
   this.reactive= this.initForm()
  }
  initForm():FormGroup { 
   return this.fb.group({ 
    email: ["", [Validators.required, Validators.minLength(6)]],
    name: ["", [Validators.required, Validators.minLength(4)]],
    password:["", [Validators.required, Validators.minLength]]
   }

   )
  }

  onAddNewUser(): void { 
    if(this.reactive.valid){ 
      const formValues= this.reactive.value;
      this.NewUserEvent.emit(formValues)
    } else {
      this.reactive.markAllAsTouched();  
    }
   
  }
}

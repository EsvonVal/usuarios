import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-perfil-usario',
  templateUrl: './perfil-usario.component.html',
  styleUrls: ['./perfil-usario.component.css']
})
export class PerfilUsarioComponent implements OnInit {
perfil!: FormGroup
  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
     this.perfil=this.iniciarForm()
  }
iniciarForm():FormGroup{ 
  return this.fb.group({ 
    name:["", Validators.required, Validators.minLength(6)],
    correo:["", Validators.required],
    foto:["", Validators.required, Validators.maxLength(15)]
  })
}

}

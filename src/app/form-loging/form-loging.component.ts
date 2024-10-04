import { Component, OnInit, Output } from '@angular/core';
import { DataServiceService, Usuario } from '../data-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-form-loging',
  templateUrl: './form-loging.component.html',
  styleUrls: ['./form-loging.component.css']
})

export class FormLogingComponent implements OnInit {
loging!:FormGroup;

usuarios:Usuario []=[]
 
  constructor( private readonly fb:FormBuilder, 
    private readonly datasv:DataServiceService
  ) { }

  ngOnInit(): void {
    this.loging= this.iniForm()

  }
iniForm():FormGroup { 
 return this.fb.group( { 
    usuario:["", Validators.required, Validators.minLength(3)],
    password:["", Validators.required, Validators.minLength(5)]
  })
}
loadUsers():void{ 
  this.datasv.getUsers().subscribe(re=>{
    this.usuarios=re
   })}

   validateUsers():void{ 
    //if(this.loging.valid){ 
      const inpUs= this.loging.get('usuario')?.value;
      const inpPass= this.loging.get('password')?.value;
      const foundUser= this.usuarios.filter(user=>user.name === inpUs.usuario 
        && user.password === inpPass.password)
        if(foundUser){ 
          
          
        }else{ 
          alert(" usuario incorrecto")
        }
        console.log(this.usuarios)
   /*}
   else{ 
    alert("formulario no valio , revisa los campos ")
   }*/
  }

}



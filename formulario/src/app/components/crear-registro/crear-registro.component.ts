import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Registro } from 'src/app/models/registro';
import { RegistroService } from 'src/app/services/registro.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-registro',
  templateUrl: './crear-registro.component.html',
  styleUrls: ['./crear-registro.component.css']
})
export class CrearRegistroComponent implements OnInit {
  usuarioForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private _registroService: RegistroService) {
    this.usuarioForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      dni: ['', Validators.required],
      fnacimiento: ['', Validators.required],
      correo: ['', Validators.required],
      urlimagen: ['', Validators.required],  
    })
   }

  ngOnInit(): void {
  }

  agregarUsuario(){
    console.log(this.usuarioForm)
  

  const USUARIO: Registro = {
    nombre: this.usuarioForm.get('nombre')?.value,
    apellido: this.usuarioForm.get('apellido')?.value,
    dni: this.usuarioForm.get('dni')?.value,
    fnacimiento: this.usuarioForm.get('fnacimiento')?.value,
    correo: this.usuarioForm.get('correo')?.value,
    urlimagen: this.usuarioForm.get('urlimagen')?.value,
  }
  console.log(USUARIO)
  this._registroService.guardarRegistro(USUARIO).subscribe(data => {
    Swal.fire(
      '¡TE HAS REGISTRADO!',
      '¡Te hemos enviado un correo, revisa tu buzón!',
      'success')
    this.router.navigate(['/']);
  },error => {
    console.log(error);
    this.usuarioForm.reset();

  })

}


  onFileChange(e: Event | any) {
    const imagen = new FormData();
    try {
      if (e.target.files.length > 0) {
        const file = e.target.files[0];
        imagen.append('image', file);
        this._registroService.postImagen(imagen).subscribe((url) => {
          this.usuarioForm.patchValue({
            urlImagen: url,
          });
        });
      }
    } catch (error) {
      console.log('error');
    }
  }
}


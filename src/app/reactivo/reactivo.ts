import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule,Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface datosform {
  nombre: string | null;
  mail: string | null;
}
@Component({
  selector: 'app-reactivo',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './reactivo.html',
  styleUrl: './reactivo.css'
})
export class Reactivo {
datosForm= new FormGroup({
  nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
  mail: new FormControl('', [Validators.required, Validators.email]),  
});  

listaNombres: datosform[] = []; 
enviar() {
  if (this.datosForm.valid) {
    const { nombre, mail } = this.datosForm.value;
    this.listaNombres.push({
      nombre: nombre ?? null,
      mail: mail ?? null
    });
    this.datosForm.reset();
    console.log('Datos enviados:', this.listaNombres);
  } else {
    console.log('Formulario inválido');
  }

}
}

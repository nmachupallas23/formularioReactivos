import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-normal',
  imports: [FormsModule,CommonModule],
  templateUrl: './normal.html',
  styleUrl: './normal.css'
})
export class Normal {
name:string = '';
names:string[] = [];
enviar() {
   if(this.name.trim()){
     this.names.push(this.name.trim());
     this.name = '';
     console.log('Nombre enviado:', this.name);
   }
  }
}

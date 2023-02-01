import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  genero: string,
  notificacion: boolean
}

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html'
})
export class SwitchesComponent {

  @ViewChild("myForm") myForm!: NgForm;
  persona: Persona = {
    genero: '',
    notificacion: true
  };
  terminos: boolean = false;

  constructor() { }

  save(): void {
    console.log('Enviado');
  }

}

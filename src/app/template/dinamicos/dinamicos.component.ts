import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string,
  favoritos: Favorito[]
}

interface Favorito {
  id: number,
  nombre: string
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html'
})
export class DinamicosComponent implements OnInit {

  @ViewChild('myForm') myForm!: NgForm;
  persona: Persona = { nombre: 'Manuel', favoritos: [{id: 1, nombre: 'Star Wars'}, {id: 2, nombre: 'Dos'}]}
  favorito: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  isValidName(): boolean {
    return this.myForm?.controls['name']?.value.length < 4 && this.myForm?.controls['name']?.touched;
  }

  save(): void {
    this.myForm.resetForm();
  }

  add(): void {
    if(this.favorito) {
      const favorito: Favorito = {
        id: this.persona.favoritos.length + 1,
        nombre: this.favorito
      }
      this.persona.favoritos.push({...favorito});
      this.favorito = '';
    }
  }

  delete(i: number): void {
    this.persona.favoritos.splice(i, 1);
  }

}

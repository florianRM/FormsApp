import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html'
})
export class DinamicosComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    agregar: this.fb.array([
      ['Suzuki'],
      ['Yamaha']
    ], Validators.required)
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  validField(): boolean {
    return this.myForm.controls['nombre'].errors && this.myForm.controls['nombre'].touched || false;
  }

  add(): void {
    const favorito = {id: this.myForm.controls['agregar'] , nombre: this.myForm.value['agregar']}
    this.myForm.controls['agregar'].value.push(favorito);
  }

  delete(i: number) {
    this.myForm.controls['agregar'].value.splice(i, 1);
  }

  save(): void {
    if(this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.controls['agregar'].value.length());
    this.myForm.reset();
  }

}

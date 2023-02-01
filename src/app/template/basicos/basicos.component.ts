import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent implements OnInit {

  @ViewChild("myForm") myForm!: NgForm;

  initForm = {
    producto: "Patata",
    precio: 2,
    existencias: 3
  }
  constructor() { }

  ngOnInit(): void {
  }

  notValidName(): boolean {
    return this.myForm?.controls['producto']?.invalid && this.myForm?.controls['producto']?.touched;
  }

  notValidPrice(): boolean {
    return this.myForm?.controls['precio']?.value<0 && this.myForm?.controls['precio']?.touched;
  }

  notValidStock(): boolean {
    return this.myForm?.controls['existencias']?.value<0 && this.myForm?.controls['existencias']?.touched;
  }

  save(): void {
    this.myForm.resetForm();
  }
}

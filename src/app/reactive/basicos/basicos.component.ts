import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent implements OnInit {
  // myForm: FormGroup = new FormGroup({
  //   nombre: new FormControl('Patatas'),
  //   precio: new FormControl(0),
  //   existencia: new FormControl(0)
  // });

  myForm: FormGroup = this.fb.group({
    nombre: ['Patatas', [Validators.required, Validators.minLength(3)]],
    precio: [2.5, [Validators.min(0), Validators.required]],
    existencias: [1000, [Validators.min(0), Validators.required]]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  isValidField(field: string): boolean {
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched || false;
  }

  submit(): void {
    if(this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    } else {
      console.log(this.myForm.value);
      this.myForm.reset();
    }
  }

}

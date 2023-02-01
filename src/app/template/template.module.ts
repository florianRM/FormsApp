import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwitchesComponent } from './switches/switches.component';
import { BasicosComponent } from './basicos/basicos.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { DirectivesComponent } from './directives/directives.component';
import { TemplateRoutingModule } from './template-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SwitchesComponent,
    BasicosComponent,
    DinamicosComponent,
    DirectivesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TemplateRoutingModule
  ],
  exports: [
    SwitchesComponent,
    BasicosComponent,
    DinamicosComponent,
    DirectivesComponent
  ]
})
export class TemplateModule { }

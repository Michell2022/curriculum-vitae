import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarexpeComponent } from './agregarexpe/agregarexpe.component';
import { ContactoComponent } from './contacto/contacto.component';



@NgModule({
  declarations: [
    AgregarexpeComponent,
    ContactoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AgregarexpeComponent,
    ContactoComponent
  ]
})
export class ComponentsModule { }

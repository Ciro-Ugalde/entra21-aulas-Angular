import { MaoDuplaComponent } from './mao-dupla/mao-dupla.component';
import { PropertyComponent } from './property/property.component';
import { EventComponent } from './event/event.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    EventComponent,
    PropertyComponent,
    MaoDuplaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
    
  ]
})
export class BindingsModule { }

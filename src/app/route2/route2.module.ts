import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component3Component } from './component3/component3.component';
import { Component4Component } from './component4/component4.component';

const routes = [
  {path: 'component3', component: Component3Component },
  {path: 'component4', component: Component4Component },
  {path: '', redirectTo: 'component3'},
]

@NgModule({
  declarations: [Component3Component, Component4Component],
  imports: [
    CommonModule
  ]
})
export class Route2Module { }

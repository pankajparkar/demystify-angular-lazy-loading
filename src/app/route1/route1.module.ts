import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { RouterModule } from '@angular/router';

const routes = [
  {path: 'component1', component: Component1Component },
  {path: 'component2', component: Component2Component },
  {path: '', redirectTo: 'component1'},
]

@NgModule({
  declarations: [Component1Component, Component2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Route1Module { }

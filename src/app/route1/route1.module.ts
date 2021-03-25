import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { RouterModule } from '@angular/router';
import { LazyLoad1Component } from './lazy-load1/lazy-load1.component';
import { Modal1Component } from './modal1/modal1.component';

const routes = [
  {path: 'component1', component: Component1Component },
  {path: 'component2', component: Component2Component },
  {path: '', redirectTo: 'component1'},
]

@NgModule({
  declarations: [Component1Component, Component2Component, LazyLoad1Component, Modal1Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Route1Module { }

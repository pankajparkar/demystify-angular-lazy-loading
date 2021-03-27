import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { CustomPreloadingStrategy } from './services/custom-preloading-strategy.service'

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'route1', loadChildren: () => import('./route1/route1.module').then(r => r.Route1Module)},
  {path: 'route2', loadChildren: () => import('./route2/route2.module').then(r => r.Route2Module)},
  {path: 'dynamic-form', loadChildren: () => import('./dynamic-form/dynamic-form.module').then(r => r.DynamicFormModule)},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: CustomPreloadingStrategy
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'route1', loadChildren: () => import('./route1/route1.module').then(r => r.Route1Module)},
  {path: 'route2', loadChildren: () => import('./route2/route2.module').then(r => r.Route2Module)},
  {path: '', redirectTo: 'route1', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

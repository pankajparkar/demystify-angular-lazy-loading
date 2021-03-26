import { Component, ComponentFactoryResolver, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LazyLoad1Component } from '../lazy-load1/lazy-load1.component';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component implements OnInit {

  @ViewChild('lazyContainer', { read: ViewContainerRef })
  private lazyContainer: any;
  component?: Promise<any>|null;

  constructor(
    private factory: ComponentFactoryResolver,
    private dialog: MatDialog,
  ) { }

  async loadComponent() {
    this.lazyContainer.clear();
    this.lazyContainer.createComponent(
      this.factory.resolveComponentFactory(LazyLoad1Component)
    );
  }

  async openModal() {
    this.dialog.open((await import('../lazy-load1/lazy-load1.component')).LazyLoad1Component);
  }

  loadWeatherComponentAsync() {
    this.component = import('../../weather-forecast/dashboard/dashboard.component').then(c => c.DashboardComponent);
  }

  async loadWeatherComponent() {
    this.lazyContainer.clear();
    const component: any = this.lazyContainer.createComponent(
      this.factory.resolveComponentFactory((await import('../../weather-forecast/dashboard/dashboard.component')).DashboardComponent)
    );
    this.lazyContainer.clear();
    component.instance.headingStart = 'Fancy Weather';
    this.dialog.open(component.componentType);
  }

  ngOnInit(): void {
  }

}

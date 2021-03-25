import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { LazyLoad1Component } from '../lazy-load1/lazy-load1.component';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component implements OnInit {

  @ViewChild('lazyContainer', { read: ViewContainerRef })
  private lazyContainer: any;

  constructor(
    private factory: ComponentFactoryResolver
  ) { }

  async loadComponent() {
    this.lazyContainer.clear();
    this.lazyContainer.createComponent(
      this.factory.resolveComponentFactory(LazyLoad1Component)
    );
  }

  ngOnInit(): void {
  }

}

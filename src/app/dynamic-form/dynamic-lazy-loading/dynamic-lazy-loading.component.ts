import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-lazy-loading',
  templateUrl: './dynamic-lazy-loading.component.html',
  styleUrls: ['./dynamic-lazy-loading.component.scss']
})
export class DynamicLazyLoadingComponent implements OnInit {

  controls: {component?: Promise<any>|null, value: any, inputs?: any}[] = [];

  constructor() { }

  async ngOnInit() {
    this.controls = [
      { component: import('./../../lazy/currency/currency.component').then(m => m.CurrencyComponent), value: 1 },
      { component: import('./../../lazy/number/number.component').then(m => m.NumberComponent), value: 1  },
      { component: import('./../../lazy/select/select.component').then(m => m.SelectComponent), value: 1, inputs: {options: ['Mumbai'] }},
      { component: import('./../../lazy/slider/slider.component').then(m => m.SliderComponent), value: 1  },
    ];
  }

}

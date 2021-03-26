import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-loading',
  templateUrl: './dynamic-loading.component.html',
  styleUrls: ['./dynamic-loading.component.scss']
})
export class DynamicLoadingComponent implements OnInit {

  controls: {component?: Promise<any>|null}[] = [
    { component: import('./../../lazy/currency/currency.component').then(c => c.CurrencyComponent) },
    { component: import('./../../lazy/number/number.component').then(c => c.NumberComponent)  },
    { component: import('./../../lazy/select/select.component').then(c => c.SelectComponent)  },
    { component: import('./../../lazy/slider/slider.component').then(c => c.SliderComponent)  },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

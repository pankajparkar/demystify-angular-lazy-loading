import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { CurrencyComponent } from './lazy/currency/currency.component';
import { NumberComponent } from './lazy/number/number.component';
import { SliderComponent } from './lazy/slider/slider.component';
import { SelectComponent } from './lazy/select/select.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyComponent,
    NumberComponent,
    SliderComponent,
    SelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    HttpClientModule,
    HttpClientJsonpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

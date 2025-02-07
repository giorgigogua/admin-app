import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsRoutingModule } from './charts-routing.module';
import { ChartModule } from 'angular-highcharts';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ChartsRoutingModule,
    ChartModule
  ]
})
export class ChartsModule { }

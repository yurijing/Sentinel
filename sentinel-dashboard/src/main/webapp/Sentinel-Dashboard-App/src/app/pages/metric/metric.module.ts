import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetricRoutingModule } from './metric-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MetricComponent } from './metric.component';

import { NgxEchartsModule } from 'ngx-echarts';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MetricRoutingModule,
    NgxEchartsModule,
    NzListModule,
    NzSelectModule,
    NzTableModule
  ],
  declarations: [MetricComponent],
  exports: [MetricComponent]
})
export class MetricModule { }

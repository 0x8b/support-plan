import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ScheduleComponent } from './schedule.component';
import { ScheduleTableComponent } from './schedule-table/schedule-table.component';

@NgModule({
  declarations: [
    ScheduleComponent,
    ScheduleTableComponent
  ],
  exports: [ScheduleComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ScheduleModule { }

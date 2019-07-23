import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ScheduleComponent } from './schedule.component';



@NgModule({
  declarations: [ScheduleComponent],
  exports: [ScheduleComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ScheduleModule { }

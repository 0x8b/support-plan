import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DutyEntryComponent } from './duty-entry.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [DutyEntryComponent],
  exports: [DutyEntryComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class DutyEntryModule { }

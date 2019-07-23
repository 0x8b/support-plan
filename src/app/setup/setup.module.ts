import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DutyEntryModule } from './duty-entry/duty-entry.module';
import { SupportTypeModule } from './support-type/support-type.module';
import { IconService } from '../services/icon.service';

@NgModule({
  imports: [
    CommonModule,
    DutyEntryModule,
    SupportTypeModule
  ],
  exports: [
    DutyEntryModule,
    SupportTypeModule
  ]
})
export class SetupModule { }
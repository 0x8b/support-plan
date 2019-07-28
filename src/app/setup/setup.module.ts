import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DutyEntryModule } from './duty-entry/duty-entry.module';
import { SupportTypeModule } from './support-type/support-type.module';
import { IconService } from '../services/icon.service';

import { DutyEntryComponent } from './duty-entry/duty-entry.component';
import { SupportTypeComponent } from './support-type/support-type.component';
import { DialogBoxComponent } from './support-type/dialog-box/dialog-box.component';

import { FormsModule } from '@angular/forms';
import { SupportTypeService } from '../services/support-type.service';


const routes: Routes = [
  {
    path: 'support-type',
    component: SupportTypeComponent
  },
  {
    path: 'duty-entry',
    component: DutyEntryComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    DutyEntryModule,
    SupportTypeModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  exports: [
    DutyEntryModule,
    SupportTypeModule
  ],
  providers: [SupportTypeService],
  entryComponents: [DialogBoxComponent]
})
export class SetupModule { }

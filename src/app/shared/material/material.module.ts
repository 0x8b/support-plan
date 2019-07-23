import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatTabsModule,
  MatIconModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTabsModule,
    MatIconModule
  ],
  exports: [
    MatTabsModule,
    MatIconModule
  ]
})
export class MaterialModule { }

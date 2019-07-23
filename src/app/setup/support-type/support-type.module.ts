import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupportTypeComponent } from './support-type.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [SupportTypeComponent],
  exports: [SupportTypeComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class SupportTypeModule { }

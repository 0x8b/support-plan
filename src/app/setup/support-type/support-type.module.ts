import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SupportTypeComponent } from './support-type.component';
import { SharedModule } from '../../shared/shared.module';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';

@NgModule({
  declarations: [
    SupportTypeComponent,
    DialogBoxComponent
  ],
  exports: [SupportTypeComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  entryComponents: [DialogBoxComponent]
})
export class SupportTypeModule { }

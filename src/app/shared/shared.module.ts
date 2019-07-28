import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { FilterComponent } from './component/filter/filter.component';
import { FilterService } from '../services/filter.service';

@NgModule({
  declarations: [FilterComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    FilterComponent
  ],
  providers: [FilterService]
})
export class SharedModule { }

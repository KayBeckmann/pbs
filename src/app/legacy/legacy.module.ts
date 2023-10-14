import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LegacyRoutingModule } from './legacy-routing.module';
import { LegacyComponent } from './legacy.component';


@NgModule({
  declarations: [
    LegacyComponent
  ],
  imports: [
    CommonModule,
    LegacyRoutingModule
  ]
})
export class LegacyModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingRoutingModule } from './main-routing-routing.module';
import { MainComponent } from '../../components/main/main.component';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, MainRoutingRoutingModule],
  exports: [MainRoutingRoutingModule, MainComponent],
})
export class MainRoutingModule {}

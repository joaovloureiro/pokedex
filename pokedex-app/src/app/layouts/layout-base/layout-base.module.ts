import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutBaseRoutingModule } from './layout-base-routing.module';
import { ComponentModule } from 'src/app/components/component/component.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, LayoutBaseRoutingModule, ComponentModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LayoutBaseModule {}

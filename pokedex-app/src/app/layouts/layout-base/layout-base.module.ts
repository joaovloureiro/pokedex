import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutBaseRoutingModule } from './layout-base-routing.module';
import { PokemonListComponent } from 'src/app/pages/pokemon-list/pokemon-list.component';
import { ComponentsModule } from 'src/app/components/component.module';
import { AppModule } from 'src/app/app.module';

@NgModule({
  declarations: [PokemonListComponent],
  imports: [CommonModule, LayoutBaseRoutingModule, ComponentsModule],
  providers: [AppModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LayoutBaseModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from 'src/app/pages/pokemon-list/pokemon-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: PokemonListComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutBaseRoutingModule { }

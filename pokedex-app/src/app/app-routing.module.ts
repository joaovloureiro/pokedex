import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutBaseComponent } from './layouts/layout-base/layout-base.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LayoutBaseComponent,
    loadChildren: () =>
      import('./layouts/layout-base/layout-base.module').then(
        (m) => m.LayoutBaseModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

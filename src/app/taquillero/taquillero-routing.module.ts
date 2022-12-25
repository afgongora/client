import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaquilleroPage } from './taquillero.page';

const routes: Routes = [
  {
    path: '',
    component: TaquilleroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaquilleroPageRoutingModule {}

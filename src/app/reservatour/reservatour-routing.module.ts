import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservatourPage } from './reservatour.page';

const routes: Routes = [
  {
    path: '',
    component: ReservatourPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservatourPageRoutingModule {}

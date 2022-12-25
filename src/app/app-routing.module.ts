import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'taquillero',
    loadChildren: () => import('./taquillero/taquillero.module').then( m => m.TaquilleroPageModule)
  },
  {
    path: 'reservatour',
    loadChildren: () => import('./reservatour/reservatour.module').then( m => m.ReservatourPageModule)
  },
  {
    path: 'res-new',
    loadChildren: () => import('./res-new/res-new.module').then( m => m.ResNewPageModule)
  },
  {
    path: 'reserva/:id',
    loadChildren: () => import('./reserva/reserva.module').then( m => m.ReservaPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

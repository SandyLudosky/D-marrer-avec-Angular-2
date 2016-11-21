import { Routes, RouterModule } from '@angular/router';

import {  AjouterComponent } from './ajouter.component';
import {  ClientsComponent } from './clients.component';
import {  ClientDetailComponent } from './client-detail.component';

const appRoutes: Routes = [
 {
  path: '',
  redirectTo: '/accueil',
  pathMatch: 'full'
},
{
    path: 'accueil',
    component: ClientsComponent
  },
  {
    path: 'ajouter',
    component: AjouterComponent
  }, 
  {
  path: 'details/:id',
  component: ClientDetailComponent
  }
]

export const routing = RouterModule.forRoot(appRoutes);
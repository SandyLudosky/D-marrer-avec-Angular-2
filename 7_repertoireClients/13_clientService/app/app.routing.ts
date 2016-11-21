import {Routes, RouterModule} from '@angular/router';

import {AppFormulaireClientsComponent} from './app.formulaire-clients.component'
import {AppDetailsClientsComponent } from './app.details-clients.component'
import {AppClientsComponent } from './app.clients.component'

const appRoutes: Routes = [
    {
        path: '', 
        redirectTo: 'accueil',
        pathMatch: 'full'
    }, 
    {
        path: 'accueil', 
        component: AppClientsComponent
    },
    {
        path: 'ajouterClient', 
        component:  AppFormulaireClientsComponent
    },
     {
        path: 'details/:id', 
        component:  AppDetailsClientsComponent 
    }
]

export const routing = RouterModule.forRoot(appRoutes);

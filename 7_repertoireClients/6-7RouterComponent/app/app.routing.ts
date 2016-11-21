import {Routes, RouterModule} from '@angular/router';

import {AppFormulaireClientsComponent} from './app.formulaire-clients.component'
import {AppDetailsClientsComponent } from './app.details-clients.component'

const appRoutes: Routes = [
    {
        path: '', 
        redirectTo: 'accueil',
        pathMatch: 'full'
    }, 
    {
        path: 'ajouterClient', 
        component:  AppFormulaireClientsComponent
    },
     {
        path: 'details/', 
        component:  AppDetailsClientsComponent 
    }
]

export const routing = RouterModule.forRoot(appRoutes);

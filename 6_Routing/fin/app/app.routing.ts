import {Routes, RouterModule} from '@angular/router';

import {AccueilComponent} from './accueil.component';
import {AppPage1Component} from './app.page1.component';
import {AppPage2Component} from './app.page2.component';


const appRoutes: Routes = [

    {
        path: '', 
        redirectTo: 'accueil', 
        pathMatch: 'full'
    }, 
    {
        path: 'accueil',
        component: AccueilComponent
    },
    {
        path: 'page1',
        component: AppPage1Component
    },
    {
        path: 'page2',
        component: AppPage2Component
    }
]

export const routing = RouterModule.forRoot(appRoutes);
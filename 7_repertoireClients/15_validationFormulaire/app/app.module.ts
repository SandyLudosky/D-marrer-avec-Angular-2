import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import { AppComponent }   from './app.component';
import {AppFormulaireClientsComponent} from './app.formulaire-clients.component';
import {AppDetailsClientsComponent} from './app.details-clients.component';
import {AppClientsComponent } from './app.clients.component';
import { routing } from './app.routing'
import {ClientService} from './client.service';


  @NgModule({
    imports: [ 
      BrowserModule, 
      FormsModule,
      routing
      ],
    declarations: [
      AppComponent, 
      AppFormulaireClientsComponent, 
      AppDetailsClientsComponent,
      AppClientsComponent
      ], 
      providers: [
        ClientService
      ],
    bootstrap: [ AppComponent ]
  })

  export class AppModule {
  }


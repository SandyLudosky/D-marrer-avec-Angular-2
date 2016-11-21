import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import { AppComponent }   from './app.component';
import {AppFormulaireClientsComponent} from './app.formulaire-clients.component';


  @NgModule({
    imports: [ 
      BrowserModule, 
      FormsModule
      ],
    declarations: [
      AppComponent, 
      AppFormulaireClientsComponent
    ],
    bootstrap: [ AppComponent ]
  })

  export class AppModule {
  }


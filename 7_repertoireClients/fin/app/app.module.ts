  import { NgModule }       from '@angular/core';
  import { BrowserModule }  from '@angular/platform-browser';
  import { FormsModule }    from '@angular/forms';
  
  import { AppComponent }   from './app.component';
  import {  AjouterComponent } from './ajouter.component';
  import {  ClientsComponent } from './clients.component';
  import {  ClientDetailComponent } from './client-detail.component';
  import { ClientService }  from './client.service';
  import { routing }        from './app.routing';
  
  
  @NgModule({
    imports: [
      BrowserModule,
      FormsModule,
      routing
    ],
    declarations: [
      AppComponent,
      ClientsComponent,
      AjouterComponent,
      ClientDetailComponent
    ], 
    providers: [
     ClientService
    ],
    bootstrap: [ AppComponent ]
  })
  export class AppModule {
  }


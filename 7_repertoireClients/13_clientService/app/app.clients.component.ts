import { Component, OnInit} from '@angular/core';

import {ClientService} from './client.service';

import { Client }    from './client';


@Component({
  selector: "liste-clients",
  templateUrl: 'app/app.clients.component.html',
  styleUrls: ['app/app.component.css']
})


export class AppClientsComponent implements OnInit {

     clients: Client[];
     client:Client;

     constructor(
       private clientService: ClientService
       ){}


    afficherClients() {
      this.clientService.getClients().then(clients => this.clients = clients)
    }

     voirDetails(client: Client, id:number) {
       this.clientService.voirClientDetails(client, id);
     }
    
     ngOnInit() {
       this.afficherClients();
    }

    

}
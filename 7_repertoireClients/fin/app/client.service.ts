import { Injectable } from '@angular/core';

import { Client } from './client';
import { CLIENTS } from './mock-clients';

@Injectable()
export class ClientService {

  clients = CLIENTS;
 	
  getClients() {
    return Promise.resolve(CLIENTS);
  }

  getClient(id: number) {
  return this.getClients()
             .then(clients => clients.find(client => client.id === id));
  }


  addToClients(newClient:Client) {
  	this.clients.push(newClient)
  }
}

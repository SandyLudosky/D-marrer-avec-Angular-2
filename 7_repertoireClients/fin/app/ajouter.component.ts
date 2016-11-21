import { Component,OnInit } from '@angular/core';
import { ClientService } from './client.service';
import { Client }    from './client';
import { Router } from '@angular/router';


@Component({
    templateUrl: './app/ajouter.component.html'
 })

export class AjouterComponent implements OnInit  {

 	newTodoText:string;
 	client:Client;
 	clients: Client[];
 	id: number;

 	 constructor(
 	 private router: Router,
 	 private clientService: ClientService
 	 ) { }

 	  getClients() {
	    this.clientService.getClients().then(clients => this.clients = clients);
	  }
	  
	  ngOnInit() {
	    this.getClients();
	  }
	  
	  addClient(nom:string, prenom:string, email:string, avatar: string) {
	    this.id = this.clients.length + 1
	  	let newClient = new Client(this.id + 1, nom, prenom, email, './app/avatars/avatar'+ this.id +'.png', true);
	    this.clientService.addToClients(newClient);
	    //alert('nouveau client' + this.id + ' ajouté')

	    //retour page accueil
  		this.router.navigate(['/accueil']);

  		//no refresh page
  		return false;

	  }
}
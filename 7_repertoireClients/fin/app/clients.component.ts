import { Component,OnInit} from '@angular/core';
import { ClientService } from './client.service';
import { Client }    from './client';
import { Router } from '@angular/router';



@Component({
    templateUrl: './app/clients.component.html',
    styleUrls: ['./app/clients.component.css']
})

export class ClientsComponent implements OnInit {
	 clients: Client[];

	  constructor(
		private router: Router,
		private clientService: ClientService) {
	  }

	  getClients() {
	    this.clientService.getClients().then(clients => this.clients = clients);
	  }
	  
	  ngOnInit() {
	    this.getClients();
	  }

	  voirDetails(client: Client) {
		let lien = ['/details', client.id];
		this.router.navigate(lien);
		console.log(lien)
	  }
}
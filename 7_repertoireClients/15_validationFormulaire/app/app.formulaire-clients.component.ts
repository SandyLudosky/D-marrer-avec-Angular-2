import {Component} from '@angular/core';
import {Router} from '@angular/router';
import { CLIENTS }    from './clients';
import { Client }    from './client';
import {ClientService} from './client.service'


@Component({
    selector : 'formulaire-clients',
    templateUrl : 'app/app.formulaire-clients.component.html', 
    styleUrls : ['app/app.component.css']
})


export class AppFormulaireClientsComponent {

     clients =  CLIENTS;
     client:Client;
     errorBox: any;


      constructor(
       private router : Router, 
       private clientService: ClientService
       ){}
	 
	  ajouterClient(nom:string, prenom:string, email:string) {
        this.clientService.ajouterAListeClients(nom, prenom, email);
        this.router.navigate(['/accueil']);
	  }
}
import {Component} from '@angular/core';
import { CLIENTS }    from './clients';
import { Client }    from './client';


@Component({
    selector : 'formulaire-clients',
    templateUrl : 'app/app.formulaire-clients.component.html'  
})


export class AppFormulaireClientsComponent {

     clients =  CLIENTS;
     client:Client;
	 
	  ajouterClient(nom:string, prenom:string, email:string) {
        let id = this.clients.length + 1
        let nouveauClient: Client = new Client(id, nom, prenom, email, false);
        this.clients.push(nouveauClient);
	  }
}
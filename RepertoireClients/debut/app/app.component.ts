import { Component} from '@angular/core';
import { CLIENTS }    from './clients';
import { Client }    from './client';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css']
})

export class AppComponent {

  clients =  CLIENTS;
  client:Client;
	 
	  ajouterClient(nom:string, prenom:string, email:string) {
		//code
	  }
 
}

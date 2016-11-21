import { Component} from '@angular/core';

import { CLIENTS }    from './clients';
import { Client }    from './client';


@Component({
  selector: "liste-clients",
  templateUrl: 'app/app.clients.component.html',
  styleUrls: ['app/app.component.css']
})


export class AppClientsComponent {

     clients =  CLIENTS;
     client:Client;

}
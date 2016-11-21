import { Component} from '@angular/core';
import {Router} from '@angular/router'

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

     constructor(private router : Router){}
    

     voirClientDetails(client: Client, id:number) {
       let lien = ['/details', id];
       this.router.navigate(lien);

     }

}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ClientService } from './client.service';
import { Client } from './client';

class ClientUnEdited {
   id: number;
   nom: string;
   prenom: string;
   email: string;
   avatar: string;
   actif: boolean;
}

@Component({
  templateUrl: 'app/client-detail.component.html'
})

export class ClientDetailComponent implements OnInit  {
  
  client: Client;
  currentClient: Client;
  clientID: number;
  clientUnEdited: any[];
  clients: Client[];
  edit:boolean;
  alternateText:string = "modifier";
  edited: boolean;

  constructor(
  	private clientService: ClientService,
  	private route: ActivatedRoute, 
    private router: Router) {
  }

  getClients() {
    this.clientService.getClients().then(clients => this.clients = clients);  
     console.log(this.clients) 
  }

  ngOnInit() {
  
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.clientService.getClient(id)
        .then(client => this.client = client);  

      this.clientService.getClient(id)
        .then(client =>  this.currentClient = client);  

    //this.clientUnEdited = ['{id: ' + this.client.id + ',  nom:' + this.client.nom + ', prenom: ' + this.client.prenom + ', email: ' + this.client.email + ', ' + this.client.avatar  +  true + '}']
    }); 
   this.getClients();

  }

  
  goBack() {
  
  let client = new Client(this.clientUnEdited['id'], this.clientUnEdited['nom'], this.clientUnEdited['prenom'], this.clientUnEdited['email'], this.clientUnEdited['avatar'], true);
   this.clients.push(client);

   this.router.navigate(['/accueil']);


   if (this.edited === false) {
       window.location.reload(); 
   }

  }

  onEdit(bool:boolean) {

    console.log(bool)

    if (bool) {
      this.edit = false;
      this.alternateText = 'modifier'; 

    } else {
      this.edit = true;
      this.alternateText = 'sauvegarder'; 
    
    }
  }

  supprimer(index: number) {

    alert("client " +  this.clients[index - 1].nom + " supprimé");
    this.clients.splice(index - 1, 1);

      //retour page accueil
      this.router.navigate(['/accueil']);

      //no refresh page      
      return false;
    }
 
    

}

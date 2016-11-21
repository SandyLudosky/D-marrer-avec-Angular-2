import {Component, OnInit} from '@angular/core'
import { CLIENTS }    from './clients';
import { Client }    from './client';
import {Router, ActivatedRoute} from '@angular/router'


@Component({
    selector: 'client-details', 
    templateUrl : 'app/app.details-clients.component.html'

})

export class AppDetailsClientsComponent implements OnInit {

    clients = CLIENTS;
    client: Client;
    edit: boolean = false;
    texteBouton: string = "Modifier"

    constructor(
        private router : Router,
        private route: ActivatedRoute)
    {}

    ngOnInit() {
        let id = +this.route.snapshot.params['id'];
        this.client = this.clients[id];
        console.log(this.clients[id])
    }

    modifierClient() {

        this.edit = (this.edit == false ? true : false);
        this.texteBouton = (this.edit == false ? "Modifier" : "Sauvegarder");
        return false;
    }

     supprimerClient(index:number) {

        this.clients.splice(index - 1, 1);
        this.router.navigate(['/accueil']);
        return false;
    }

}
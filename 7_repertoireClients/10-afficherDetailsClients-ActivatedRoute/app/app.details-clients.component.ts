import {Component} from '@angular/core'
import { CLIENTS }    from './clients';
import { Client }    from './client';
import {Router, ActivatedRoute} from '@angular/router'


@Component({
    selector: 'client-details', 
    templateUrl : 'app/app.details-clients.component.html'

})

export class AppDetailsClientsComponent {

    constructor(
        private router : Router,
        private route: ActivatedRoute)
    {}

    modifierClient() {
        //code
    }

     supprimerClient() {
        //code
    }

}
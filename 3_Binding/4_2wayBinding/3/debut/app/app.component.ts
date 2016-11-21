import { Component } from '@angular/core';
import { FormsModule }   from '@angular/forms';


@Component({
    selector: 'ng-app',
    templateUrl: 'app/template.html'
})
export class AppComponent { 

    taches: string[] = ['faire contrôle technique', 'payer factures', 'réserver séjour Italie'];
    nouvelleTache:string;

    ajouterTache(nouvelleTache:string) {
        this.taches.push(nouvelleTache);
        nouvelleTache = '';
    }

}

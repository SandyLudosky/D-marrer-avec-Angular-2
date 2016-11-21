import { Component } from '@angular/core';



@Component({
    selector: 'ng-app',
    templateUrl: 'app/template.html'
})
export class AppComponent { 

    taches : string[] = ['faire contrôle technique', 'payer les factures', 'réserver séjour Italie']
    texte: string;

    ajouterAListe(nouvelleTache:string) {
        this.taches.push(nouvelleTache)
        this.texte  = '';
    } 
}

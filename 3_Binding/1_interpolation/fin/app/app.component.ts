import { Component } from '@angular/core';

@Component({
    selector: 'ng-app',
    template: `
    <h1>{{titre}}</h1>
    <h2>J'apprends Angular {{ 1 + 1 }}</h2>

    <p> C'est un paragraphe</p>
    `

})

export class AppComponent {

    titre = "Mon Premier Projet Angular 2";

}

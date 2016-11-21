import { Component } from '@angular/core';

@Component({
    selector: 'ng-app',
    template: `<h1>{{titre}}</h1>
    <button (click)="onClick()">Cliquer sur le bouton</button>
    `
})
export class AppComponent {

    titre :string = "On est quelle date aujourd'hui?"
    date: Date = new Date();
    alert: string = "tu as clique le bouton"

    onClick() {
        alert(this.date)
    }
}
 
import { Component } from '@angular/core';
import {AppFormulaireComponent} from './app.formulaire.component'


@Component({
    selector: 'todo-app',
    templateUrl:  'app/app.component.html', 
    directives: [AppFormulaireComponent]
      
})

export class AppComponent {

   todos: any[] = [
        {texte: 'aller chez le dentiste', desc: 'détartrage et radio', date: new Date(2016, 8, 29), estFait: false, priority: 'faible'},
        {texte: 'appeler Pierre', desc: 'invitation anniversaire', date: new Date(2016, 10, 19), estFait: false, priority: 'haute'},
        {texte: 'payer facture internet', desc: '35 euros', date: new Date(2016, 8, 19), estFait: false, priority: 'haute'},
        {texte: 'faire les courses', desc: 'acheter articles pour anniversaire', date: new Date(2016, 9, 15), estFait: false, priority: 'haute'},
        {texte: 'publier un cours sur tuto.com', desc: 'un cours sur React.js', date: new Date(2016, 10, 19), estFait: false, priority: 'moyenne'}
   ]

 


 }

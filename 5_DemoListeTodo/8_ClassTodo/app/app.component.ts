import { Component } from '@angular/core';
import {AppFormulaireComponent} from './app.formulaire.component'
import {Todo} from './todo';
import {TODOS} from './todos';


@Component({
    selector: 'todo-app',
    templateUrl:  'app/app.component.html', 
    directives: [AppFormulaireComponent]
      
})

export class AppComponent {

    todos = TODOS;

 }

import { Component } from '@angular/core';
import {AppFormulaireComponent} from './app.formulaire.component'
import {Todo} from './todo';
import {TODOS} from './todos';


@Component({
    selector: 'todo-app',
    templateUrl:  'app/app.component.html', 
    styleUrls : ['app/app.component.css'],
    directives: [AppFormulaireComponent]
      
})

export class AppComponent {

    todos = TODOS;
    todoSelectionne:Todo;
    priorities : string[] = ['faible', 'moyenne', 'haute'];
    texteBouton:string = 'Modifier';


    edit:boolean = false;

    setClasses(todo: Todo) {
        let classes = {
            faible: todo.priority == 'faible',
            moyenne: todo.priority == 'moyenne',
            haute : todo.priority == 'haute'
        };
        return classes
    }

    onSelect(todo: Todo) {
        this.todoSelectionne = todo;
        console.log(todo)
    }

    modifierTodo(bool:boolean) {
        this.edit = (this.edit ? false : true);
        this.texteBouton = (this.edit ? 'Sauvegarder': 'Modifier' )
    }

 }

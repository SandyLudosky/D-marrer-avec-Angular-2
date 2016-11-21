import { Component } from '@angular/core';

class Langage {
  id: number;
  nom: string;  
}

const LANGAGES : Langage[] =  [
  {id: 1, nom: 'angular'},
  {id: 2, nom: 'javascript'},
  {id: 3, nom: 'rails'},
  {id: 4, nom: 'python'},
  {id: 5, nom: 'swift'},
  {id: 6, nom: 'java'},
  {id: 7, nom: 'c++'},
  {id: 8, nom: 'php'},
  {id: 9, nom: 'golang'}
] 

@Component({
  selector: 'ng-app',
  templateUrl: 'app/template.html', 
  styles : ['ul li {list-style-type: none}']
})

export class AppComponent {
   langages = LANGAGES;
}

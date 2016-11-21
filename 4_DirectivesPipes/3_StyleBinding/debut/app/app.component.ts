import { Component } from '@angular/core';

class Langage {
  id: number;
  nom: string;
  interested: boolean;
}

const LANGAGES : Langage[] = [
      {id: 2, nom: 'javascript', interested: false},
      {id: 3, nom: 'rails', interested: false},
      {id: 4, nom: 'python', interested: false},
      {id: 5, nom: 'swift', interested: false},
      {id: 6, nom: 'java', interested: false},
      {id: 7, nom: 'c++', interested: false},
      {id: 8, nom: 'php', interested: false},
      {id: 9, nom: 'golang', interested: false}
]

  
@Component({
  selector: 'ng-app',
  templateUrl: 'app/template.html', 
  styles : ['ul li {list-style-type: none}', '.surligner {background: yellow}']
})

export class AppComponent {
   langages = LANGAGES;

   surligner(index:number) {
     this.langages[index].interested =  (this.langages[index].interested == false ?  this.langages[index].interested = true : this.langages[index].interested = false)

   }
}

import { Component } from '@angular/core';



class Langage {
  id: number;
  nom: string;  
  interested: boolean;
}

const LANGAGES : Langage[] =  [
  {id: 1, nom: 'angular', interested: false},
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
  styles: ['app/app.component.css']
})

export class AppComponent {

  langages = LANGAGES;

  setStyles(langage: Langage) {
    let styles = {
      //Propriétés css
      'color': langage.interested ? '#000' : '#ccc', 
      'background-color': langage.interested ? 'yellow' : 'transparent'
    };
    return styles
  }
  
   marquerImportant(index: number) {
    //code
    let langage = this.langages[index];
    langage.interested = true;
   }

   marquerPasImportant(index: number) {
    //code
    let langage = this.langages[index];
    langage.interested = false;
   }
    
}

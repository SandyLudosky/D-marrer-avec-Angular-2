import { Component} from '@angular/core';

const LANGAGES : string[] =  [ 
  'angular', 
  'javascript',
  'rails', 
  'python', 
  'swift', 
  'java',
  'c++', 
  'php', 
  'golang'
] 

@Component({
  selector: 'ng-app',
  templateUrl: 'app/template.html'
})

export class AppComponent {

   langages  = LANGAGES;

   ajouterAListe(index: number) {
    //code
   }

   retirerListe(index: number) {
     //code
   }
    
}

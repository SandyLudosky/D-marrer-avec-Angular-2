import { Component} from '@angular/core';



class Langage {
  id: number;
  nom: string;  
  interested: boolean;
}



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
  templateUrl: 'app/template.html',
  styleUrls: ['app/app.component.css']
})

export class AppComponent {

   langages  = LANGAGES;
   langagesSelectionnes: string[] = [];
   nombre: number;

   ajouterAListe(index: number) {
     let langage:string = this.langages[index];
     this.langagesSelectionnes.push(langage)
     this.langages.splice(index, 1); 

     console.log(langage)
   }

   retirerListe(index: number) {
      let langage:string = this.langagesSelectionnes[index];
      this.langages.push(langage)
      this.langagesSelectionnes.splice(index, 1);

      console.log(langage)
   }
   
   retournerCompte() {
     this.nombre = this.langagesSelectionnes.length;
     return this.nombre;
   }
    
}

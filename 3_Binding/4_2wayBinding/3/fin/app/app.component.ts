import { Component } from '@angular/core';
import { FormsModule }   from '@angular/forms';


@Component({
    selector: 'ng-app',
    templateUrl: 'app/template.html', 
    styles : ['ul li {cursor: pointer}', '.fait { text-decoration: line-through; color: #ccc }']
})
export class AppComponent { 

    taches: any[] = [
        {texte: 'pommes', fait: false}, 
        {texte: 'dentrifice', fait: false}, 
        {texte: 'mouchoirs', fait: false}, 
    ];
    texte:string;

    ajouterTache(nouvelleTache:string) {
        this.taches.push({texte:nouvelleTache, fait:false});
        this.texte = '';
    }

    barrerListe(index:number) {
      // console.log(this.taches[index] + " acheté") 
       
       this.taches[index].fait =  (this.taches[index].fait == false ? this.taches[index].fait = true : this.taches[index].fait = false)
    }

}
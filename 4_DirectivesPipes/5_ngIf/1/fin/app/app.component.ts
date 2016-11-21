import { Component } from '@angular/core';

@Component({
    selector: 'ng-app',
    templateUrl: 'app/template.html'
})

export class AppComponent { 
    texteBouton:string = "cacher";
    visible:boolean = true;

    cacherTexte() {

        if(this.visible  == true) {
            this.visible = false 
            this.texteBouton = "afficher"
        } else {
             this.visible = true
             this.texteBouton = "cacher"
        }

    }

}

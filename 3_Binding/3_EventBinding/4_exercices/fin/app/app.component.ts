import { Component } from '@angular/core';

@Component({
    selector: 'ng-app',
    templateUrl: 'app/template.html'
})
export class AppComponent { 
	
     //propriétés
	titre:string = "Event Binding - Exercices"
    alert:string  = "Tu as cliqué sur le bouton"
    texte:string = "Cliquer sur le bouton pour changer le texte"
    date:Date;
    nombre:number = 1
    images : string[] = ['app/images/image1.jpg','app/images/image2.jpg', 'app/images/image3.jpg', 'app/images/image4.jpg', 'app/images/image5.jpg'];
    image: string = this.images[0];
    width: string = '555'
    height:string = '300'
    index:number = 0;


    //functions
    onClick() {
        alert(this.alert)
    }

    changerTexte() {
        this.texte = "Vous avez cliqué sur le bouton"
    }

    afficherDate() {
        this.date = new Date();
    }

    incrementerNombre() {
        this.nombre ++
    }

    animerCarousel() {

       if (this.index == this.images.length - 1) {
           this.index = 0;
           this.image = this.images[this.index]
       } else {
            this.index++;
            this.image = this.images[this.index]
       }

    }

}

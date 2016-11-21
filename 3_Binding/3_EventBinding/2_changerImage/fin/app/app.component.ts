import { Component } from '@angular/core';

@Component({
  selector: 'ng-app',
  template: `<h1>Event Binding</h1>

  <img [src]="image" width={{width}} height={{height}}> <br>
  <button class="btn btn-default" (click)="changerImage()">Cliquer pour changer image</button>
  
  <p>source : picjumbo.com</p>
  `
})

export class AppComponent {
    image: string = "app/image.jpg";
    width: string = '500';
    height: string= '333';

    changerImage() {
      this.image  = "app/image2.jpg";
    }
}

import { Component } from '@angular/core';

@Component({
  selector: 'ng-app',
  template: `<h1>Property Binding</h1>

  <img [src]="image" [width]="width" [height]="height">
  <p>source : picjumbo.com</p>
  `
})

export class AppComponent {
    image: string = "app/image.jpg";
    width : string = "1000";
    height: string = "667";
}

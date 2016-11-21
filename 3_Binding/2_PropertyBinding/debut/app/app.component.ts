import { Component } from '@angular/core';

@Component({
  selector: 'ng-app',
  template: `<h1>Property Binding</h1>

  <img src="">
  <p>source : picjumbo.com</p>
  `
})

export class AppComponent {
    image: string = "app/image.jpg";
}

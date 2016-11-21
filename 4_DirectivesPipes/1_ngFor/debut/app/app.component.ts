import { Component } from '@angular/core';

@Component({
  selector: 'ng-app',
  templateUrl: 'app/template.html', 
  styles : ['ul li {list-style-type: none}']
})

export class AppComponent {

   langages: any[] = [
    {id: 1, nom: 'angular'},
    {id: 2, nom: 'javascript'}
   ]
}

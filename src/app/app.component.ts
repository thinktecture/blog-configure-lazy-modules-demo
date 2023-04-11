import { Component } from '@angular/core';

@Component({
  selector: 'yb-root',
  template: `
    <ul>
      <li><a [routerLink]="['']">Home</a></li>
      <li><a [routerLink]="['lazy']">Lazy</a></li>
    </ul>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}

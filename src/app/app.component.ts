import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <ul>
      <li><a [routerLink]="['']">Home</a></li>
      <li><a [routerLink]="['lazy']">Lazy</a></li>
      <li><a [routerLink]="['more-laziness', 'lazy-1']">Lazy One</a></li>
      <li><a [routerLink]="['more-laziness', 'lazy-2']">Lazy Two</a></li>
    </ul>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}

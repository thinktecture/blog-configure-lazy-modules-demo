import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { COMPONENT_CONFIG, SomeConfig } from './config.model';

const LAZY_CONFIG: SomeConfig = { debug: false, text: 'Lazy Component' };

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'lazy',
    loadComponent: () => import('./lazy-home/lazy-home.component'),
    providers: [{ provide: COMPONENT_CONFIG, useValue: LAZY_CONFIG }],
  },
  {
    path: 'more-laziness',
    loadChildren: () => import('./more-laziness/more-lazy.routes'),
  },
];

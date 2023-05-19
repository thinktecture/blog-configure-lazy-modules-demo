import { Routes } from '@angular/router';
import { COMPONENT_CONFIG, SomeConfig } from '../config.model';
import { LazyOneComponent } from './lazy-one.component';
import { LazyTwoComponent } from './lazy-two.component';

const MORE_LAZINESS_CONFIG: SomeConfig = { debug: false, text: 'More Laziness' };

export const MORE_LAZINESS_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    providers: [{ provide: COMPONENT_CONFIG, useValue: MORE_LAZINESS_CONFIG }],
    children: [
      { path: 'lazy-1', component: LazyOneComponent },
      { path: 'lazy-2', component: LazyTwoComponent },
    ],
  },
];

export default MORE_LAZINESS_ROUTES;

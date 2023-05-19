import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPONENT_CONFIG } from '../config.model';

@Component({
  selector: 'app-more-laziness',
  standalone: true,
  imports: [CommonModule],
  template: `<h2>Lazy 2</h2>
  <pre>{{ config | json }}</pre>`,
})
export class LazyTwoComponent {
  public readonly config = inject(COMPONENT_CONFIG);
}

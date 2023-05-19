import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPONENT_CONFIG } from '../config.model';

@Component({
  selector: 'app-more-laziness',
  standalone: true,
  imports: [CommonModule],
  template: `<h2>Lazy 1</h2>
  <pre>{{ config | json }}</pre>`,
})
export class LazyOneComponent {
  public readonly config = inject(COMPONENT_CONFIG);
}

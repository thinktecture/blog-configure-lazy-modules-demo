import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPONENT_CONFIG } from '../config.model';

@Component({
  selector: 'app-lazy-home',
  standalone: true,
  imports: [CommonModule],
  template: `<pre>{{ config | json }}</pre>`,
})
export class LazyHomeComponent {
  public readonly config = inject(COMPONENT_CONFIG);
}

export default LazyHomeComponent;

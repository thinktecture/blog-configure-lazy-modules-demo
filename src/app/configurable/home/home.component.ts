import { Component, Inject } from '@angular/core';
import { ModuleConfig, MODULE_CONFIG } from '../configurable.module';

@Component({
  template: `<pre>{{ config | json }}</pre>`,
})
export class HomeComponent {
  constructor(@Inject(MODULE_CONFIG) readonly config: ModuleConfig) {}
}

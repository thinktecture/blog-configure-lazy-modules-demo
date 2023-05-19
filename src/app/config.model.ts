import { InjectionToken } from '@angular/core';

export interface SomeConfig {
  debug: boolean;
  text: string;
}

export const COMPONENT_CONFIG = new InjectionToken<SomeConfig>('Component Config');

export const DEFAULT_CONFIG: SomeConfig = { debug: false, text: 'Eager Component' };

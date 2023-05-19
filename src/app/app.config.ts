import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { COMPONENT_CONFIG, DEFAULT_CONFIG } from './config.model';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), { provide: COMPONENT_CONFIG, useValue: DEFAULT_CONFIG }],
};

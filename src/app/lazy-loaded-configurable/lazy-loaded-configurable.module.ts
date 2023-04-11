import { CommonModule } from '@angular/common';
import { InjectionToken, NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { LazyLoadedConfigurableRoutingModule } from './lazy-loaded-configurable-routing.module';

export interface ModuleConfig {
  debug: boolean;
  text: string;
}

export const MODULE_CONFIG = new InjectionToken<ModuleConfig>('Module Config');

export const DEFAULT_CONFIG: ModuleConfig = { debug: false, text: '' };

function ConfigFactory() {
  return LazyLoadedConfigurableModule.config;
}

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, LazyLoadedConfigurableRoutingModule],
  providers: [
    {
      provide: MODULE_CONFIG,
      useFactory: ConfigFactory,
    },
  ],
})
export class LazyLoadedConfigurableModule {
  static config = DEFAULT_CONFIG;

  static configure(
    config: Partial<ModuleConfig> = DEFAULT_CONFIG,
  ): LazyLoadedConfigurableModule {
    this.config = { ...DEFAULT_CONFIG, ...config };
    return this;
  }
}

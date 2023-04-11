import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ConfigurableRoutingModule } from './configurable-routing.module';

export interface ModuleConfig {
  debug: boolean;
  text: string;
}

export const MODULE_CONFIG = new InjectionToken<ModuleConfig>('Module Config');

export const DEFAULT_CONFIG: ModuleConfig = { debug: false, text: 'Eager Module' };

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, ConfigurableRoutingModule],
})
export class ConfigurableModule {
  static forRoot(config: Partial<ModuleConfig>): ModuleWithProviders<ConfigurableModule> {
    const mergedConfig = { ...DEFAULT_CONFIG, ...config };

    return {
      ngModule: ConfigurableModule,
      providers: [{ provide: MODULE_CONFIG, useValue: mergedConfig }],
    };
  }
}

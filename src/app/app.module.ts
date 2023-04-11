import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigurableModule } from './configurable/configurable.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ConfigurableModule.forRoot({ debug: true })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

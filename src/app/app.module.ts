import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './shared/components/login/login.component';
import { AboutComponent } from './shared/components/about/about.component';
import { MainRoutingModule } from './shared/modules/main-routing/main-routing.module';

@NgModule({
  declarations: [AppComponent, LoginComponent, AboutComponent],
  imports: [BrowserModule, MainRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

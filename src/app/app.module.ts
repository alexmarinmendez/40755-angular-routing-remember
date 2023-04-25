import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './shared/components/login/login.component';
import { AboutComponent } from './shared/components/about/about.component';
import { MainRoutesModule } from './shared/modules/main-routes/main-routes.module';

@NgModule({
  declarations: [AppComponent, LoginComponent, AboutComponent],
  imports: [BrowserModule, MainRoutesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

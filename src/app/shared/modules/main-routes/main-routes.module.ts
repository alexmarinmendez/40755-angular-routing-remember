import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../../components/login/login.component';
import { AboutComponent } from '../../components/about/about.component';
import { MainComponent } from '../../components/main/main.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
];

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule, MainComponent],
})
export class MainRoutesModule {}

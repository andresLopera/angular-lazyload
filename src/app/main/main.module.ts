import { routing } from './main.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root/root.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TopbarComponent } from './topbar/topbar.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  exports: [RootComponent],
  declarations: [RootComponent, LoginComponent, HomeComponent, TopbarComponent]
})
export class MainModule { }

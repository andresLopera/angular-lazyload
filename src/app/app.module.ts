import { MainModule } from './main/main.module';
import { RootComponent } from './main/root/root.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MainModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }

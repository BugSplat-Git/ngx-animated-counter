import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { AnimatedCounterModule } from 'animated-counter';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AnimatedCounterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

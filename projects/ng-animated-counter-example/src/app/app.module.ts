import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { NgAnimatedCounterModule } from 'projects/ng-animated-counter/src'; // TODO BG fix path

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NgAnimatedCounterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

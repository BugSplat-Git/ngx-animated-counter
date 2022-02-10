import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { NgxAnimatedCounterModule } from 'projects/ngx-animated-counter/src'; // TODO BG fix path

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NgxAnimatedCounterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

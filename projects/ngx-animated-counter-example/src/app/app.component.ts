import { Component } from '@angular/core';
import { NgxAnimatedCounterParams } from '@bugsplat/ngx-animated-counter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public readonly title: string = '@bugsplat/ngx-animated-counter';

  public params0: NgxAnimatedCounterParams = {
    start: 0,
    end: 100,
    interval: 100,
  };
  public params1: NgxAnimatedCounterParams = {
    start: 1000,
    end: 10000,
    interval: 10,
  };
  public params2: NgxAnimatedCounterParams = {
    start: 100,
    end: 0,
    interval: 100,
  };
  public params3: NgxAnimatedCounterParams = {
    start: 0,
    end: 123123123123,
    interval: 10,
    increment: 123123,
  };
}

import { Component } from '@angular/core';
import { NgAnimatedCounterParams } from 'projects/ng-animated-counter/src'; // TODO BG fix path

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public readonly title: string = '@bugsplat/ng-animated-counter';

  public params0: NgAnimatedCounterParams = { start: 0, end: 100, interval: 100 };
  public params1: NgAnimatedCounterParams = { start: 1000, end: 10000, interval: 10 };
  public params2: NgAnimatedCounterParams = { start: 100, end: 0, interval: 100 };
}

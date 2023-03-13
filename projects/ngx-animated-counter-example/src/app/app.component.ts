import { Component } from '@angular/core';
import { NgxAnimatedCounterParams } from '@bugsplat/ngx-animated-counter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public readonly title: string = '@bugsplat/ngx-animated-counter';
  public readonly paramsVariations: NgxAnimatedCounterParams[] = [
    {
      start: 0,
      end: 100,
      interval: 100,
    },
    {
      start: 1000,
      end: 10000,
      interval: 10,
    },
    {
      start: 100,
      end: 0,
      interval: 100,
    },
    {
      start: 0,
      end: 123123123123,
      interval: 10,
      increment: 123123,
    },
    {
      start: 100,
      end: 96,
      interval: 3000,
      increment: 3,
    },
  ];
}

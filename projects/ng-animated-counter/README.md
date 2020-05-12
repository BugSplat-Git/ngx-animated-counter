# ng-animated-counter

Animations for incrementing numbers!

## Installation

`npm i -s @bugsplat/ng-animated-counter`

## Usage

Add the NgAnimatedCounterModule to your module's imports array:

```ts
import { NgAnimatedCounterModule } from '@bugsplat/ng-animated-counter'

@NgModule({
  ...
  imports: [
    NgAnimatedCounterModule
  ],
  ...
})
```

The component takes one input with three properties. The properties are the start number, the end number and the amount of time to delay in milliseconds incrementing by 1:

```ts
public params: NgAnimatedCounterParams = { start: 20, end: 50, interval: 10 };
```

Add the counter to your component's template:

```html
<ng-animated-counter [params]="params"></ng-animated-counter>
```

## Compatability

ng-animated-counter is built using Angular `>=6.0.0`.

## Credits

ng-animated-counter is an open source tool from [BugSplat](https://www.bugsplat.com/)! BugSplat is a crash reporting tool used by developers to find when their software crashes while in use, and to collect data valuable to fixing those crashes. If you're interested in crash reporting, check out our [Angular](https://www.bugsplat.com/docs/sdk/angular/) integration. 

With :heart:  
BugSplat

## License

MIT

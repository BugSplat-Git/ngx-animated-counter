# animated-counter

Animations for incrementing numbers!

## Installation

`npm install --save bugsplat-animated-counter`

## Usage
Import AnimatedCounterModule into NgModule imports:
```js
import { AnimatedCounterModule } from 'bugsplat-animated-counter'

@NgModule({
  ...
  imports: [
    AnimatedCounterModule
  ],
  ...
```
The component takes one input in the form of an object, the min number, the max number, and the count duration in milliseconds. It is formatted as follows:
```js
public counter = {min: 20, max: 50, interval: 10}
  ...
```
Add the counter to your page:
```
<animated-counter [params]="counter"></animated-counter>
```

## Compatability
Animated counter is built using Angular`>=6.0.0`.


## Credits

animated-counter is an open source tool from [BugSplat](https://www.bugsplat.com/)! BugSplat is a crash reporting tool used by developers to find when their software crashes while in use, and to collect data valuable to fixing those crashes. If you're interested in crash reporting, check out our [Angular](https://www.bugsplat.com/docs/sdk/angular/) integration. 

With :heart:
BugSplat

## License

MIT

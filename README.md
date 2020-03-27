# animated-counter

Animations for incrementing and decrementing numbers!

## Installation

`npm install --save bugsplat-animated-counter`

## Usage
Import AnimatedCounterModule into NgModule imports:
```js
import { AnimatedCounterModule } from 'bs-animated-counter'

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
Animated counter is dependant on Angular and has been tested with the following versions.

|    Angular    | 
| ------------- |
|   8.x.x       | 
|   9.x.x       | 


## Credits

animated-counter is an open source tool from BugSplat! 

## License

MIT

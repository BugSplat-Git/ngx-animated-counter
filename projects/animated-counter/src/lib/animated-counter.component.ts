import { Component, Input, OnDestroy } from '@angular/core';
import { Subscription, timer, Subject } from 'rxjs';
import { mapTo, scan, startWith, switchMap, takeWhile } from 'rxjs/operators';
import { AnimatedCounterParams } from './animated-counter-params';

@Component({
  selector: 'animated-counter',
  templateUrl: 'animated-counter.component.html',
  styleUrls: ['animated-counter.component.scss']
})
export class AnimatedCounter implements OnDestroy {
  @Input() set params(value: AnimatedCounterParams) {
    if (this._counterSubscription) {
      this._counterSubscription.unsubscribe();
    }

    this.current = value.start;
    this._counterSubscription = this._counterSubject$
      .pipe(
        switchMap(end => {
          return timer(0, value.interval)
            .pipe(
              mapTo(this.positiveOrNegative(end, this.current)),
              startWith(this.current),
              scan((acc: number, curr: number) => acc + curr),
              takeWhile(this.isApproachingRange(end, this.current))
            )
        })
      )
      .subscribe((val: number) => this.current = val);
      
    this._counterSubject$.next(value.end);
  }

  public current = 0;

  private _counterSubject$ = new Subject();
  private _counterSubscription: Subscription;

  ngOnDestroy(): void {
    if (this._counterSubscription) {
      this._counterSubscription.unsubscribe();
    }
  }

  private positiveOrNegative(endRange, currentNumber): number {
    return endRange > currentNumber ? 1 : -1;
  }

  private isApproachingRange(endRange, currentNumber): (val: number) => boolean {
    return endRange > currentNumber
      ? val => val <= endRange
      : val => val >= endRange;
  }
}
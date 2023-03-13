import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { NgxAnimatedCounterComponent } from './ngx-animated-counter.component';

describe('NgxAnimatedCounter', () => {
  let component: NgxAnimatedCounterComponent;
  let fixture: ComponentFixture<NgxAnimatedCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxAnimatedCounterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxAnimatedCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should count from start to end', fakeAsync(() => {
    const interval = 10;
    const start = 0;
    const end = 100;
    const totalTime = interval * (end - start);

    component.params = {
      start,
      end,
      interval,
    };

    tick(totalTime);
    expect(component.current).toEqual(end);
  }));

  it('should count up by increment if provided', fakeAsync(() => {
    const interval = 10;
    const start = 0;
    const end = 1000;
    const increment = 25;
    const totalTime = interval * (end - start);

    component.params = {
      start,
      end,
      interval,
      increment,
    };

    tick(0);
    const result = component.current;
    tick(totalTime);

    expect(result).toEqual(increment);
  }));

  it('should count up by 1 if increment not provided', fakeAsync(() => {
    const interval = 10;
    const start = 0;
    const end = 1000;
    const totalTime = interval * (end - start);

    component.params = {
      start,
      end,
      interval,
    };

    tick(0);
    const result = component.current;
    tick(totalTime);

    expect(result).toEqual(1);
  }));

  it('should count down by increment if provided', fakeAsync(() => {
    const interval = 10;
    const start = 1000;
    const end = 0;
    const increment = 25;
    const totalTime = interval * (start - end);

    component.params = {
      start,
      end,
      interval,
      increment,
    };

    tick(0);
    const result = component.current;
    tick(totalTime);

    expect(result).toEqual(start - increment);
  }));

  it('should count down by 1 if increment not provided', fakeAsync(() => {
    const interval = 10;
    const start = 1000;
    const end = 0;
    const totalTime = interval * (start - end);

    component.params = {
      start,
      end,
      interval,
    };

    tick(0);
    const result = component.current;
    tick(totalTime);

    expect(result).toEqual(start - 1);
  }));

  it('should finish counting up with end value when value delta is not divisible by increment', fakeAsync(() => {
    const interval = 10;
    const start = 90;
    const end = 100;
    const increment = 7;
    const totalTime = interval * (end - start);

    component.params = {
      start,
      end,
      interval,
      increment,
    };

    tick(totalTime);
    expect(component.current).toEqual(end);
  }));

  it('should finish counting down with end value when value delta is not divisible by increment', fakeAsync(() => {
    const interval = 10;
    const start = 100;
    const end = 90;
    const increment = 7;
    const totalTime = interval * (start - end);

    component.params = {
      start,
      end,
      interval,
      increment,
    };

    tick(totalTime);
    expect(component.current).toEqual(end);
  }));
});

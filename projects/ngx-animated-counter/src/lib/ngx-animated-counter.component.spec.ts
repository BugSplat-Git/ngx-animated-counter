import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { NgxAnimatedCounter } from './ngx-animated-counter.component';

describe('NgxAnimatedCounter', () => {
  let component: NgxAnimatedCounter;
  let fixture: ComponentFixture<NgxAnimatedCounter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxAnimatedCounter ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxAnimatedCounter);
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
      interval
    };

    tick(totalTime);
    expect(component.current).toEqual(end);
  }));

  it('should count by increment if provided', fakeAsync(() => {
    const interval = 10;
    const start = 0;
    const end = 1000;
    const increment = 25;
    const totalTime = interval * (end - start);

    component.params = {
      start,
      end,
      interval,
      increment
    };

    tick(0);
    const result = component.current;
    tick(totalTime);
    
    expect(result).toEqual(increment);
  }));

  it('should count by 1 if increment not provided', fakeAsync(() => {
    const interval = 10;
    const start = 0;
    const end = 1000;
    const totalTime = interval * (end - start);

    component.params = {
      start,
      end,
      interval
    };

    tick(0);
    const result = component.current;
    tick(totalTime);
    
    expect(result).toEqual(1);
  }));
});

import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { NgAnimatedCounter } from './ng-animated-counter.component';

describe('NgAnimatedCounter', () => {
  let component: NgAnimatedCounter;
  let fixture: ComponentFixture<NgAnimatedCounter>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgAnimatedCounter ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgAnimatedCounter);
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
});

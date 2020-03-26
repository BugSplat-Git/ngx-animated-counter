import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { AnimatedCounter } from './animated-counter.component';

describe('AnimatedCounter', () => {
  let component: AnimatedCounter;
  let fixture: ComponentFixture<AnimatedCounter>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatedCounter ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedCounter);
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

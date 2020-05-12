import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NgAnimatedCounterModule } from 'projects/ng-animated-counter/src'; // TODO BG fix path

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NgAnimatedCounterModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have set title to \'@bugsplat/ng-animated-counter\'', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('@bugsplat/ng-animated-counter');
  });

  it('should render 3 ng-animated-counters', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('ng-animated-counter').length).toEqual(3);
  });
});

import { TestBed } from '@angular/core/testing';
import { NgxAnimatedCounterModule } from '@bugsplat/ngx-animated-counter';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NgxAnimatedCounterModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have set title to \'@bugsplat/ngx-animated-counter\'', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('@bugsplat/ngx-animated-counter');
  });

  it('should render 4 ngx-animated-counters', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('ngx-animated-counter').length).toEqual(4);
  });
});

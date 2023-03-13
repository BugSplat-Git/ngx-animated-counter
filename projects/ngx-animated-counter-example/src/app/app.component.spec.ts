import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxAnimatedCounterModule } from '@bugsplat/ngx-animated-counter';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxAnimatedCounterModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it("should have set title to '@bugsplat/ngx-animated-counter'", () => {
    expect(component.title).toEqual('@bugsplat/ngx-animated-counter');
  });

  it('should render ngx-animated-counter for each params variation', () => {
    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges(); // run *ngFor
    const renderedCounters = compiled.querySelectorAll('ngx-animated-counter');
    expect(renderedCounters.length).toEqual(component.paramsVariations.length);
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxAnimatedCounterModule } from '@bugsplat/ngx-animated-counter';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

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

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
  })

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should have set title to \'@bugsplat/ngx-animated-counter\'', () => {
    expect(component.title).toEqual('@bugsplat/ngx-animated-counter');
  });

  it('should render 4 ngx-animated-counters', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('ngx-animated-counter').length).toEqual(4);
  });
});

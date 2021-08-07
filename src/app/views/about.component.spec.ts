import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AboutComponent } from './about.component';
import { By } from '@angular/platform-browser';

describe('about Component', () => {
  let aboutComponent: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AboutComponent
      ],
      imports: [RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    aboutComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the about component', waitForAsync(() => {
    expect(aboutComponent).toBeTruthy();
  }));

  it('should contain title', waitForAsync(() => {
    expect(aboutComponent.title).toBe('About');
  }));

  it('should contain information', waitForAsync(() => {
    const info = fixture.debugElement.nativeElement.querySelector('#info');
    expect(info.innerHTML.length).toBeGreaterThan(0);
  }));

  it('should contain image', waitForAsync(() => {
    const img = fixture.debugElement.query(By.css('img')).nativeElement;
    expect(img.src).toContain('assets/img/About.jpg');
  }));
});
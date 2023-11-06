import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebPagesHealthLibraryComponent } from './web-pages-health-library.component';

describe('WebPagesHealthLibraryComponent', () => {
  let component: WebPagesHealthLibraryComponent;
  let fixture: ComponentFixture<WebPagesHealthLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebPagesHealthLibraryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WebPagesHealthLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

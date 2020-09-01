import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material.module';
import { FarmersComponent } from './farmers.component';
import { FarmerSearchCardComponent } from './farmer-search-card/farmer-search-card.component';
import { FarmersService } from './farmers.service';
import { HttpClientModule } from '@angular/common/http';

describe('FarmersComponent', () => {
  let component: FarmersComponent;
  let fixture: ComponentFixture<FarmersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
      ],
      declarations: [FarmersComponent, FarmerSearchCardComponent],
      providers: [FarmersService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a variable farmer to be undefined', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app.farmer).toEqual(undefined);
  });

  it('should render labels in a app-farmer-search-card tag', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(
      compiled.querySelector('app-farmer-search-card').textContent
    ).toContain('Name or Doc#');
  });

  it('should render search icon in a app-farmer-search-card tag', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(
      compiled.querySelector('app-farmer-search-card').textContent
    ).toContain('search');
  });

  it('should render labels in a mat-form-field tag', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const contentSelector = compiled.querySelector('.search-result')
      .textContent;
    expect(contentSelector).toContain('Name');
    expect(contentSelector).toContain('Doc#');
    expect(contentSelector).toContain('Address');
  });
});

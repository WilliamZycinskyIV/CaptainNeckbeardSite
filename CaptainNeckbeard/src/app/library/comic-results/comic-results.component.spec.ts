import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicResultsComponent } from './comic-results.component';

describe('ComicResultsComponent', () => {
  let component: ComicResultsComponent;
  let fixture: ComponentFixture<ComicResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComicResultsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComicResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

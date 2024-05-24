import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyComicComponent } from './weekly-comic.component';

describe('WeeklyComicComponent', () => {
  let component: WeeklyComicComponent;
  let fixture: ComponentFixture<WeeklyComicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeeklyComicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeeklyComicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

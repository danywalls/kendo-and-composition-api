import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbaCalendarComponent } from './nba-calendar.component';

describe('NbaCalendarComponent', () => {
  let component: NbaCalendarComponent;
  let fixture: ComponentFixture<NbaCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NbaCalendarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NbaCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

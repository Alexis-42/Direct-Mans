import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GtfsComponent } from './gtfs.component';

describe('GtfsComponent', () => {
  let component: GtfsComponent;
  let fixture: ComponentFixture<GtfsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GtfsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GtfsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

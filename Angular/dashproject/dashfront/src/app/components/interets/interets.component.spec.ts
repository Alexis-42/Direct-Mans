import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteretsComponent } from './interets.component';

describe('InteretsComponent', () => {
  let component: InteretsComponent;
  let fixture: ComponentFixture<InteretsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteretsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteretsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

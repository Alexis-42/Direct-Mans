import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetramComponent } from './setram.component';

describe('SetramComponent', () => {
  let component: SetramComponent;
  let fixture: ComponentFixture<SetramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

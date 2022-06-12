import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HitlerComponent } from './hitler.component';

describe('HitlerComponent', () => {
  let component: HitlerComponent;
  let fixture: ComponentFixture<HitlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HitlerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HitlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

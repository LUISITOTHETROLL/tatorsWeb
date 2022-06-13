import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KimComponent } from './kim.component';

describe('KimComponent', () => {
  let component: KimComponent;
  let fixture: ComponentFixture<KimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

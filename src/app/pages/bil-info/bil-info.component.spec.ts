import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilInfoComponent } from './bil-info.component';

describe('BilInfoComponent', () => {
  let component: BilInfoComponent;
  let fixture: ComponentFixture<BilInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BilInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BilInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

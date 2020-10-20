import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NummerpladeComponent } from './nummerplade.component';

describe('NummerpladeComponent', () => {
  let component: NummerpladeComponent;
  let fixture: ComponentFixture<NummerpladeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NummerpladeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NummerpladeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

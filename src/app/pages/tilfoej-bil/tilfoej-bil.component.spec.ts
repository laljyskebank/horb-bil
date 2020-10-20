import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TilfoejBilComponent } from './tilfoej-bil.component';

describe('TilfoejBilComponent', () => {
  let component: TilfoejBilComponent;
  let fixture: ComponentFixture<TilfoejBilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TilfoejBilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TilfoejBilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

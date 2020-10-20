import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForslagTilBilComponent } from './forslag-til-bil.component';

describe('ForslagTilBilComponent', () => {
  let component: ForslagTilBilComponent;
  let fixture: ComponentFixture<ForslagTilBilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForslagTilBilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForslagTilBilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

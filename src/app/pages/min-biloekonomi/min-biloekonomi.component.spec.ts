import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinBiloekonomiComponent } from './min-biloekonomi.component';

describe('MinBiloekonomiComponent', () => {
  let component: MinBiloekonomiComponent;
  let fixture: ComponentFixture<MinBiloekonomiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinBiloekonomiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinBiloekonomiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

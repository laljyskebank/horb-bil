import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NyBilStandardComponent } from './ny-bil-standard.component';

describe('NyBilStandardComponent', () => {
  let component: NyBilStandardComponent;
  let fixture: ComponentFixture<NyBilStandardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NyBilStandardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NyBilStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

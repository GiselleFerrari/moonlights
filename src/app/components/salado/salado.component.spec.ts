import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaladoComponent } from './salado.component';

describe('SaladoComponent', () => {
  let component: SaladoComponent;
  let fixture: ComponentFixture<SaladoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaladoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

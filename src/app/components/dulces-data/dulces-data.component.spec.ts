import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DulcesDataComponent } from './dulces-data.component';

describe('DulcesDataComponent', () => {
  let component: DulcesDataComponent;
  let fixture: ComponentFixture<DulcesDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DulcesDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DulcesDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

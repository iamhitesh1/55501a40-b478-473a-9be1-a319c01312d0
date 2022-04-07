import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FishdescriptionComponent } from './fishdescription.component';

describe('FishdescriptionComponent', () => {
  let component: FishdescriptionComponent;
  let fixture: ComponentFixture<FishdescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FishdescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FishdescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

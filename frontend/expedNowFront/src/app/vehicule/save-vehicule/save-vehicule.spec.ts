import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveVehicule } from './save-vehicule';

describe('SaveVehicule', () => {
  let component: SaveVehicule;
  let fixture: ComponentFixture<SaveVehicule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SaveVehicule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveVehicule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

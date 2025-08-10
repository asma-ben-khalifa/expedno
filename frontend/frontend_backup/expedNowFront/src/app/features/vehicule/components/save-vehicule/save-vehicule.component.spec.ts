import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveVehiculeComponent } from './save-vehicule.component';

describe('SaveVehiculeComponent', () => {
  let component: SaveVehiculeComponent;
  let fixture: ComponentFixture<SaveVehiculeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaveVehiculeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveVehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiculeRoutingModule } from '../vehicule-routing-module';
import { SaveVehicule } from '../save-vehicule/save-vehicule';


@NgModule({
  declarations: [
    SaveVehicule
  ],
  imports: [
    CommonModule,
    VehiculeRoutingModule
  ]
})
export class VehiculeModule { }

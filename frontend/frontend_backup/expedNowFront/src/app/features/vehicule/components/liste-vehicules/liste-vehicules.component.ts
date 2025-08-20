import { Component, OnInit } from '@angular/core';
import { VehiculeService } from '../../services/vehicule.service';
import { CommonModule } from '@angular/common';
import{Vehicule} from  '../../models/vehicule.model' ;

@Component({
  selector: 'app-liste-vehicules',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './liste-vehicules.component.html',
  styleUrl: './liste-vehicules.component.css'
})
export class ListeVehiculesComponent  implements OnInit{

vehicules : Vehicule[] = [];

constructor(private vehiculeService : VehiculeService) {}

ngOnInit(): void {
    this.vehiculeService.afficherListeVehicule
}

}

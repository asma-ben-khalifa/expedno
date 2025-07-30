import { Injectable } from '@angular/core';
import {VehiculeModule} from '../models/vehicule-module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehicule } from '../vehicule';

@Injectable({
  providedIn: 'root'
})
export class VehiculeService {

  private apiUrl = 'https://effective-space-chainsaw-vgrjq7x6vvw2w9qv-8080.app.github.dev/vehicules';

  constructor(private http:HttpClient) {}

  //recuperer tous les vehicules 
  getAllVehicules():Observable<Vehicule[]>{
    return this.http.get<Vehicule[]>(this.apiUrl);
  }
   
}

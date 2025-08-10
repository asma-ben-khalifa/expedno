import { Injectable } from '@angular/core';
import {SaveVehiculeRequest } from '../models/save-vehicule-request.model';
import { Vehicule } from '../models/vehicule.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class VehiculeService {

  private apiUrl ='https://effective-space-chainsaw-vgrjq7x6vvw2w9qv-8080.app.github.dev/vehicules'

  constructor(private http : HttpClient) { }

  saveVehicule(data : SaveVehiculeRequest) : Observable<Vehicule>{
   return this.http.post<Vehicule>(`${this.apiUrl}/`, data);
  }
}

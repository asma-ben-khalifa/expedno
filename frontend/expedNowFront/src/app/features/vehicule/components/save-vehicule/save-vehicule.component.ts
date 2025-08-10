import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { VehiculeService } from '../../services/vehicule.service';
import { Vehicule } from '../../models/vehicule.model';
import { Router } from '@angular/router';




@Component({
  selector: 'app-save-vehicule',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './save-vehicule.component.html',
  styleUrl: './save-vehicule.component.css'
})
export class SaveVehiculeComponent {
   
  form! : FormGroup;

  constructor(
    private fb: FormBuilder,
    private vehiculeService : VehiculeService,
    private router : Router

  ){}

  ngOnInit(){
    this.form = this.fb.group({
      matricule : ['' , Validators.required],
      numSerie : ['', Validators.required],
      disponible : [true]

    }) ;

  }



  onSubmit(){
    if(this.form.valid){
      this.vehiculeService.saveVehicule(this.form.value).subscribe({
        next : () => {
          alert('Véhicule enregistré avec succès !');
          this.router.navigate(['/']);
        },
        error : err => {
          alert('Erreur lors de l’enregistrement : ' + err.message);

        }
      });
    }
    else{
      this.form.markAllAsTouched();
    }
  }

}

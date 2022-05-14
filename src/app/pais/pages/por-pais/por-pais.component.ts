import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent implements OnInit {
  public pista: string = 'Ingrese Pais...';
  public busqueda: string = '';
  public hayError: boolean = false;
  public paises: Country[] = [];
  constructor( private paisService: PaisService) {

  }

  ngOnInit(): void {
    this.hayError = false;
  }

  public ingresarBusqueda( busqueda: string): void{
    this.busqueda = busqueda;
    this.hayError = false;  
    this.paisService.searchByCountry(busqueda).subscribe(
      ( response ) => {
        this.paises = response;
      },
      ( error ) => {
            this.hayError = true;
      }
    );
  }
}

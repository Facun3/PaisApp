import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent implements OnInit {
  public hayError: boolean = false;
  public busqueda: string = '';
  public pista = 'Ingrese Región...';
  public paises: Country[] = [];
  
  constructor( private paisService: PaisService) {

  }

  ngOnInit(): void {
    this.hayError = false;
  }

  public ingresarBusqueda( busqueda: string): void{
    this.busqueda = busqueda;
    this.hayError = false;  
    this.paisService.searchByRegion(busqueda).subscribe(
      ( response ) => {
        this.paises = response;
      },
      ( error ) => {
        this.hayError = true;
      }
    );
  }
}

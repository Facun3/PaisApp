import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {
  public pista: string = 'Ingrese Capital...';
  public busqueda: string = '';
  public hayError: boolean = false;
  public paises: Country[] = [];
  constructor( private paisService: PaisService ) { }

  ngOnInit(): void {
  }

  public ingresarBusqueda( busqueda: string): void{
    this.busqueda = busqueda;
    this.hayError = false;  
    this.paisService.searchByCapital(busqueda).subscribe(
      ( response ) => {
        this.paises = response;
      },
      ( error ) => {
        this.hayError = true;
      }
    );
  }

}

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

  public termino: string = '';
  public hayError: boolean = false;
  public paises: Country[] = [];
  constructor( private paisService: PaisService) {

  }

  ngOnInit(): void {
  }

  public ingresarBusqueda(): void{
    this.hayError = false;
    if(this.termino != '' && this.termino != null){
      this.paisService.searchByName(this.termino).subscribe(
        ( response ) => {
          this.paises = response;
          console.log( response );
        },
        ( error ) => {
              this.hayError = true;
        }
      );
      this.termino = '';
    }
  }
}

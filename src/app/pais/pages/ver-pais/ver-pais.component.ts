import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/country.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor( 
    private activateRoute: ActivatedRoute, 
    private paisService: PaisService
    ) { }

  ngOnInit(): void {
    this.listenRoute();
  }

  private listenRoute(): void {
    this.activateRoute.params
      .pipe(
        switchMap( ({id}) => this.paisService.searchByAlpha(id)),
        tap( countries => console.log(countries[0])  )
      )
      .subscribe( response => {
        this.pais = response[0];
      });
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-pais-table',
  templateUrl: './pais-table.component.html',
  styleUrls: ['./pais-table.component.css']
})
export class PaisTableComponent implements OnInit {
  @Input('dataSource') data!: Country[];
  paises: Country[] = [];

  constructor() { }

  ngOnInit(): void {
    this.paises = this.data;
  }

}

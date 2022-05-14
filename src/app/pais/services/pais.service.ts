import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";    
import { Country } from "../interfaces/country.interface";


@Injectable({
    providedIn: 'root'
})
export class PaisService {

    private countriesApi = 'https://restcountries.com/v3.1';

    constructor(private http: HttpClient){
    }

    public searchByCountry( busqueda: string): Observable<Country[]> {
        return this.http.get<Country[]>(`${ this.countriesApi}/name/${ busqueda }`)
    }

    public searchByRegion( busqueda: string): Observable<Country[]> {
        return this.http.get<Country[]>(`${ this.countriesApi}/region/${ busqueda }`)
    }

    public searchByCapital( busqueda: string): Observable<Country[]> {
        return this.http.get<Country[]>(`${ this.countriesApi}/capital/${ busqueda }`)
    }

    public searchByAlpha( busqueda: string): Observable<Country[]> {
        return this.http.get<Country[]>(`${ this.countriesApi}/alpha/${ busqueda }`)
    }
}
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

    public searchByName( busqueda: string): Observable<Country[]> {
        return this.http.get<Country[]>(`${ this.countriesApi}/name/${ busqueda }`)
    }
}
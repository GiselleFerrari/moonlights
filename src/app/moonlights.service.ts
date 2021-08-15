import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoonlightsService {
  
  constructor(
    private http: HttpClient
  ) { }

  fetchUrl = "/assets/recetas.json";

  getDulces () {
    return this.http.get<any>(this.fetchUrl)
  }

}

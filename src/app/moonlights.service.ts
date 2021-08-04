import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoonlightsService {

  constructor(
    private http: HttpClient
  ) { }

  fetchUrl = "https://goo.gl/maps/98c1iQEDUKBzfx8w5";

  getMap () {
    return this.http.get<any>(this.fetchUrl)
  }

}

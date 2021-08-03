import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoonlightsService {

  constructor(
    private http: HttpClient
  ) { }

  fetchUrl = '"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.9874686043718!2d-58.51444848420333!3d-34.528545461032586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a3333f1dc0624f%3A0x8fc86d8ddb1daefa!2sCuba%20Salsa%20Show!5e0!3m2!1ses-419!2sar!4v1627950995709!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"';

  getMap () {
    return this.http.get<any>(this.fetchUrl);
  }

}

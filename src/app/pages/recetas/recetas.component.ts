import { Component, OnInit } from '@angular/core';
// Importamos el Servicio
import { MoonlightsService } from 'src/app/moonlights.service';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.scss']
})
export class RecetasComponent implements OnInit {

  constructor(
    private moonlightsService: MoonlightsService
  ) { }

  datita: any;

  showMap () {
    this.moonlightsService.getMap()
    .subscribe((data: any) => {
      console.log(data);
      this.datita = data;
    });
  }

  ngOnInit(): void {
    this.showMap();
  }

}

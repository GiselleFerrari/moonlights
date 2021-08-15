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
    private moonlights: MoonlightsService
  ) { }

  // title = "Dulces"
  mostrar = false;
  dulces : any;

  showDulces () {
    this.moonlights.getDulces()
    .subscribe((data: any)=>{
    
       this.dulces = data;
  });
}

  toggleInformation () {
    // Invertimos el estado de mostrar
    this.mostrar = !this.mostrar;
  }

  ngOnInit(): void {
    this.showDulces();
  }

}

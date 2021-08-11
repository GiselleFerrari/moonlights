import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

    sliders = [
      {
      imagen: "/assets/images/slider/oreo2.jpg",
    },{
      imagen: "/assets/images/slider/lemon2.jpg",
    },{
      imagen: "/assets/images/slider/cheesecake.jpg",
    },{
      imagen: "/assets/images/slider/escon2.jpg",
    }
    ]
  
    cards = [
      {
      imagen: "/assets/images/tarjetas/lemon.jpg",
      titulo: "Lemon Pie",  
      categoria: "Un relleno suave de limón especiado, con merengue esponjoso y tostado.",          
    },{
      imagen: "/assets/images/tarjetas/chocotorta.jpg",
      titulo: "Chocotorta",
      categoria: "Un clásico de chocolate, dulce de leche, queso crema y decoraciones a gusto.",            
    },{
      imagen: "/assets/images/tarjetas/oreo1.jpg",
      titulo: "Torta Oreo",  
      categoria: "Helado casero de oreo, con bizcocho de chocolate y crema de oreo.",          
    },{
      imagen: "/assets/images/tarjetas/cheesec.jpg",
      titulo: "Cheesecake de Frutos Rojos",  
      categoria: "Tarta a base de queso crema con frutos naturales: Arándanos,  frambuesas, moras y frutillas.",          
    }
    ]

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  title = 'Moonlights';
    subtitle = '¡Bienvenidos a Moonlights Bakery! Cada producto está realizado con mucho amor ♥';
  
    cards = [
      {
      imagen: "/assets/images/tarjetas/lemon.jpg",
      categoria: "Un relleno suave de limón especiado, con merengue esponjoso y tostado.",
      titulo: "Lemon Pie",
      precio: 600,
    },{
      imagen: "/assets/images/tarjetas/chocotorta.jpg",
      categoria: "Un clásico de chocolate, dulce de leche, queso crema y decoraciones a gusto.",
      titulo: "Chocotorta",
      precio: 500,
    },{
      imagen: "/assets/images/tarjetas/oreo1.jpg",
      categoria: "Helado casero de oreo, con bizcocho de chocolate y crema de oreo.",
      titulo: "Torta Oreo",
      precio: 800,
    },{
      imagen: "/assets/images/tarjetas/cheesec.jpg",
      categoria: "Tarta a base de queso crema con frutos naturales: Arándanos,  frambuesas, moras y frutillas.",
      titulo: "Cheesecake de Frutos Rojos",
      precio: 700,
    }
  ]

  ngOnInit(): void {
  }

}

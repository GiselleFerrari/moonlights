import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  constructor() { }

  // title = "Título del h1";
  // subtitle = "Subtítulo del h1";

  // Valor predeterminado o indicador de opcional ?
  @Input() title = "Contenido";
  @Input() subtitle?: string;
  
  ngOnInit(): void {
  }

}

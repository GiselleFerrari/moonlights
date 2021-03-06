import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  @Input() imagen = "/assets/images/tarjetas/lemon.jpg";
  @Input() categoria?: string;
  @Input() titulo = "Lemon Pie";

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dulces',
  templateUrl: './dulces.component.html',
  styleUrls: ['./dulces.component.scss']
})
export class DulcesComponent implements OnInit {

  constructor() { }

  @Input() blockTitle?: string;
  @Input() blockText?: string;
  @Input() alt?: string;
  @Input() imagen = "/assets/images/dulces/Limon01.jpg";

  ngOnInit(): void {
  }

}

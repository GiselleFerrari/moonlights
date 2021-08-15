import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  constructor() { }

  @Input() contacto = "/assets/images/contacto/zorrito.png";

  ngOnInit(): void {
  }

}

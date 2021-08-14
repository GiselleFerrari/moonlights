import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  //(click)="toggleInformation()"

  mostrar = true

  toggleInformation () {
    // Invertimos el estado de mostrar
    this.mostrar = !this.mostrar;
  }

  ngOnInit(): void {
  }

}

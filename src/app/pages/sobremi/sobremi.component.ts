import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.scss']
})
export class SobremiComponent implements OnInit {

  constructor() { }

  title = "Sobre Mi"

  @Input() retrato = "/assets/images/sobremi/retrato.jpg";

  ngOnInit(): void {
  }

}

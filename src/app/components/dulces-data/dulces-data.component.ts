import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dulces-data',
  templateUrl: './dulces-data.component.html',
  styleUrls: ['./dulces-data.component.scss']
})
export class DulcesDataComponent implements OnInit {

  constructor() { }

  @Input() blockTitle?: string;
  @Input() blockText?: string;

  ngOnInit(): void {
  }

}

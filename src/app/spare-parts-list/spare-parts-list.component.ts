import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spare-parts-list',
  templateUrl: './spare-parts-list.component.html',
  styleUrls: ['./spare-parts-list.component.scss']
})
export class SparePartsListComponent implements OnInit {

  spare = {
    "spare": "Bieleta",
    "brand": "nakata",
    "price": 700,
    "stock": 1000,
    "image": "assets/img/bieleta-nakata.jpg"
  }
  constructor() { }

  ngOnInit(): void {
  }

}

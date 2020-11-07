import { Component, OnInit } from '@angular/core';
import { SpareCartService } from '../spare-cart.service';
import { Spare } from './spare';

@Component({
  selector: 'app-spare-parts-list',
  templateUrl: './spare-parts-list.component.html',
  styleUrls: ['./spare-parts-list.component.scss']
})
export class SparePartsListComponent implements OnInit {

  spares: Spare[] = [
    {
      spare: "Bieleta",
      brand: "Nakata",
      price: 700,
      stock: 10,
      image: "assets/img/bieleta-nakata.jpg",
      clearance: false,
      quantity: 0,
    },
    {
      spare: "Parrilla superior derecha",
      brand: "Corven",
      price: 6678,
      stock: 0,
      image: "assets/img/parrilla-superior.jpg",
      clearance: false,
      quantity: 0,
    },
    {
      spare: "parrilla superior izquierda",
      brand: "Corven",
      price: 6675,
      stock: 12,
      image: "assets/img/parrilla-superior.jpg",
      clearance: false,
      quantity: 0,
    },
    {
      spare: "precap",
      brand: "Peugeot",
      price: 4350,
      stock: 0,
      image: "assets/img/precap.jpg",
      clearance: false,
      quantity: 0,
    },
    {
      spare: "amortiguador",
      brand: "Corven",
      price: 675,
      stock: 5,
      image: "assets/img/amortiguador.jpg",
      clearance: true,
      quantity: 0,
    },
    {
      spare: "amortiguador moto",
      brand: "Honda",
      price: 665,
      stock: 12,
      image: "assets/img/amortiguador-moto.jpg",
      clearance: false,
      quantity: 0,
    },
    {
      spare: "buje de parrilla",
      brand: "Fiat",
      price:375,
      stock: 0,
      image: "assets/img/buje-parrilla.jpg",
      clearance: true,
      quantity: 0,
    },
    {
      spare: "buje de barra",
      brand: "Chevrolet",
      price: 275,
      stock: 12,
      image: "assets/img/buje-barra.jpg",
      clearance: false,
      quantity: 0,   
    },
  ];

  constructor(private cart: SpareCartService) {

   }

  ngOnInit(): void {
  }

  addToCart(spare): void{
    this.cart.addToCart(spare);
    spare.stock -=  spare.quantity;
    spare.quantity = 0;
  }

  maxReached(m: string) {
    alert(m)
  }

}

import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { SpareCartService } from '../spare-cart.service';
import { Spare } from '../spare-parts-list/spare';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  spareShop$: Observable<Spare[]>;
  constructor(private cart: SpareCartService) {
    this.spareShop$ = cart.spareShop.asObservable();
  }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    
  }

}
 
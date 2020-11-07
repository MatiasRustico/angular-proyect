import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Spare } from './spare-parts-list/spare';

@Injectable({
  providedIn: 'root'
})
export class SpareCartService {

  private _spareShop: Spare[] = [];

  spareShop: BehaviorSubject<Spare[]> = new BehaviorSubject(this._spareShop);

  constructor() { }


  addToCart(spare: Spare) {
    let item: Spare = this._spareShop.find((v1)=> v1.spare == spare.spare);
    if(!item){
      this._spareShop.push({... spare});
    }else{
      item.quantity += spare.quantity
    }
    this.spareShop.next(this._spareShop);
  }
 
}

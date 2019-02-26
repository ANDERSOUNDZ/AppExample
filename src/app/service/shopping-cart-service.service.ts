import { Injectable } from '@angular/core';
import { detailsProductos } from '../model/descriptionProducts';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartServiceService {

  public cartData: detailsProductos [] = [];

  constructor() { 

      

  }
}

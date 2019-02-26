import { Component, OnInit, Input } from '@angular/core';
import { detailsProductos } from 'src/app/model/descriptionProducts';
import { ShoppingCartServiceService } from 'src/app/service/shopping-cart-service.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  itemSeleccionado: detailsProductos;

  constructor(public shoppingCartServiceService: ShoppingCartServiceService) { }

  ngOnInit() {
  }

  funcCambiar(item){
    this.itemSeleccionado = item;
    const index = this.shoppingCartServiceService.cartData.indexOf(item);
    this.shoppingCartServiceService.cartData.splice(index,1);
  }
 


}

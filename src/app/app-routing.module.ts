import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { CarritoComponent } from './shop-home/carrito/carrito.component';
import { ProductosComponent } from './shop-home/productos/productos.component';
import { ProductListItemsComponent } from './shop-home/productos/product-list-items/product-list-items.component';
import { ShopHomeComponent } from './shop-home/shop-home.component';


const routes: Routes = [

{ path: '',
  redirectTo: 'app-shop-home',
  pathMatch: 'full'
},
{ path: 'app-shop-home',
  component: ShopHomeComponent
}, 
{ path: 'app-productos',
  component: ProductosComponent
},
{ path: 'app-carrito',
  component: CarritoComponent
},
{ path: 'app-product-list-items',
  component: ProductListItemsComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

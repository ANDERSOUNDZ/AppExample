import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { CarritoComponent } from './shop-home/carrito/carrito.component';
import { ProductosComponent } from './shop-home/productos/productos.component';
import { ShopHomeComponent } from './shop-home/shop-home.component';

const routes: Routes = [

{ path: '',
  redirectTo: 'app-shop-home',
  pathMatch: 'full'
},
{ path: 'app-shop-home',
  component: ShopHomeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

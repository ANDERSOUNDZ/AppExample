import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MaterialModule } from './material/material.module';
import { ShopHomeComponent } from './shop-home/shop-home.component';
import { CarritoComponent } from './shop-home/carrito/carrito.component';
import { ProductListItemsComponent } from './shop-home/productos/product-list-items/product-list-items.component';
import { ProductosComponent } from './shop-home/productos/productos.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    CarritoComponent,
    ProductListItemsComponent,
    ShopHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

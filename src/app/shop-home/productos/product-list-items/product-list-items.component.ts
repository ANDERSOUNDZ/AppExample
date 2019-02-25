import { Component, OnInit, Input, Output } from '@angular/core';
import { detailsProductos } from 'src/app/model/descriptionProducts';

@Component({
  selector: 'app-product-list-items',
  templateUrl: './product-list-items.component.html',
  styleUrls: ['./product-list-items.component.scss']
})
export class ProductListItemsComponent implements OnInit {

  @Input() listaItems : detailsProductos;

  constructor() { }

  ngOnInit() {
  }

  

}

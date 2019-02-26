import { Component, OnInit, Input } from '@angular/core';
import { detailsProductos } from 'src/app/model/descriptionProducts';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  listaItem : detailsProductos;

  listComponent: detailsProductos[] = [
    
    {
    id: "01",
    nameProduct: "Lavadora",
    description: "Lavadora 29 libras / Mave/ 2019"
    },
    {
      id: "02",
      nameProduct: "Lavadora",
      description: "Lavadora 29 libras / Mave/ 2019"
    },
    {
        id: "03",
        nameProduct: "Lavadora",
        description: "Lavadora 29 libras / Mave/ 2019"
    }
    
];

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Output, Input } from '@angular/core';
import { detailsProductos } from 'src/app/model/descriptionProducts';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {


  
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

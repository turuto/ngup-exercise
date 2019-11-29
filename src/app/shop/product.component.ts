import { Component, OnInit } from '@angular/core';

import { Product } from '../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})


export class ProductComponent implements OnInit {

  public product: Product;
  public name: string = "MINOMBRE";


  constructor() { }
  ngOnInit() {
    this.product = new Product(
      "Spiderman", "https://media.metrolatam.com/2019/06/07/spidermanfarfrom-b23dc3aa3d34a4b847dfdc537ef0377b-1200x800.jpg",
      90,
      200,
      false
    );
    console.log(this.product);
  }
}
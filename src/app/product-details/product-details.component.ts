import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;
  cartService1; //idk if its angular or stackblitz but without this variabale cartService methods can only be called like 10% of the time
  constructor(private route: ActivatedRoute, private cartService: CartService) {
    this.cartService1 = cartService;
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => { 
    this.product = products[+params.get('productId')];
    });
  }

  addToCart(product) {
    window.alert('Your product has been added to the cart!');
    this.cartService1.addToCart(product);
  }

}
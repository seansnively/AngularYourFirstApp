import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  cartService1; //idk if its angular or stackblitz but without this variabale cartService methods can only be called like 10% of the time
  checkoutForm;
  constructor(private cartService: CartService, private formBuilder: FormBuilder,) {
    this.cartService1 = cartService;
    this.items = this.cartService1.getItems();

    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
   }

  ngOnInit() {
  }

  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);
 
    this.items = this.cartService1.clearCart();
    this.checkoutForm.reset();
  }
}
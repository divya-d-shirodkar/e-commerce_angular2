import { Component, OnInit } from '@angular/core';
import { Cart } from '../model/cart/cart.interface';
import { CartService } from '../services/cart/cart.service';


@Component({
	selector: 'cart',
	templateUrl: './cart.html',
	providers: [CartService]
})
export class CartComponent implements OnInit {

	cartList : Cart = {};
	total : number = 0;
	
	constructor(private cartService: CartService) {

	}

	deleteFromCart(productId: number) {

		this.cartService.deleteFromCart('divya.dshirodkar@gmail.com', productId).then(response => {console.log(response); this.getCartList()});

	}

	calcaulateTotal(cartlist : Cart) {

		cartlist.products.forEach(product => {console.log('total : '+this.total) ; this.total += (product.quantity * product.price);});

	}

	getCartList() {

		this.cartService.getCartList('divya.dshirodkar@gmail.com').then(cartList => 
			{
				this.cartList = cartList;
				this.calcaulateTotal(cartList);
			}
		);
		
	}

	ngOnInit() {

		this.getCartList();
	}

}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../model/product/product.interface';
import { ProductsService } from '../services/product/product.service';
import { CartService } from '../services/cart/cart.service';

@Component({
	selector: 'product-details',
	templateUrl: './product-details.html',
	providers: [ProductsService, CartService]
})
export class ProductDetailComponent implements OnInit {

	productId : number;
	product: Product = {};
	
	constructor(route:  ActivatedRoute, private productsService: ProductsService, private cartService: CartService) {
		this.productId = route.snapshot.params['id'];
		
	}

	AddedToCart(product : Product) {

		this.cartService.addToCart('divya.dshirodkar@gmail.com', product).then(response => console.log(response), error => console.log(error));

	}

	getProductDetails(productId: number): void {
		
		this.productsService.getProductDetails(Number(productId)).then( product => {
			this.product = product;			
		});

	}

	ngOnInit(): void {

		this.getProductDetails(this.productId);
		
	}
}

import { Injectable } from '@angular/core';
import { Product } from '../../model/product/product.interface';
import { PRODUCTS } from '../../mocks/products/products-mock';



@Injectable()
export class ProductsService {

	getProducts(): Promise<Product[]> {
		return Promise.resolve(PRODUCTS);
	}

	getProductDetails(productId: number): Promise<Product> {
	
	  	console.log('productId : '+productId);
		for(let key in PRODUCTS) {
			console.log('in before '+PRODUCTS[key]);
			console.log(typeof productId);
			if(PRODUCTS[key].id === productId) {
				console.log('in if '+PRODUCTS[key]);
				return Promise.resolve(PRODUCTS[key]);
			}	

		} 
	}
	
}
import { Injectable } from '@angular/core';
import { Product } from '../../model/product/product.interface';
import { Cart } from '../../model/cart/cart.interface';
import { CARTLIST } from '../../mocks/cart/cart-mock';


@Injectable()
export class CartService {

	getCartList(userId: string): Promise<Cart> {

		for(let key in CARTLIST){
			if(CARTLIST[key].userId === userId) {
				console.log(CARTLIST[key]);
				return Promise.resolve(CARTLIST[key]);
			}
			
 		}	

	}

	addToCart(userId: string, product: Product): Promise<Object> {
		
		let exists = false;
		
		for(let key in CARTLIST) {
			
			if(CARTLIST[key].userId === userId) {
				
				for(let index in CARTLIST[key].products) {
					
					if(CARTLIST[key].products[index].id === product.id)  {

						exists = true;				

					}
				}

				if(exists) {
					
					return Promise.reject({"data": "Product already present in cart"});

				} else {
					
					CARTLIST[key].products.push(product);
					return Promise.resolve({"data": "succes"});

				}

			}
		}			
	}


	deleteFromCart(userId: string, productId: number): Promise<Object> {
		
		let exists = false;
		
		for(let key in CARTLIST) {
			
			if(CARTLIST[key].userId === userId) {
				
				for(let index in CARTLIST[key].products) {
					
					if(CARTLIST[key].products[index].id === productId)  {

						CARTLIST[key].products.splice(index , 1);				
						return Promise.resolve({"data": "succes"});
						
					}
				}
			}
		}			
	}
}
 
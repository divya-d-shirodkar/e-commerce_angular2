import { Component, Input } from '@angular/core';
import { Product } from '../model/product/product.interface';

@Component({
	selector: 'counter',
	templateUrl: './counter.html'
})
export class CounterComponent {

	@Input() product: Product;

	increementQuantity () {

		if(this.product.quantity == 10) return;

		this.product.quantity = this.product.quantity + 1;
	}

	decreementQuantity () {		

		if(this.product.quantity == 1) return;

		this.product.quantity = this.product.quantity - 1;

	}
}
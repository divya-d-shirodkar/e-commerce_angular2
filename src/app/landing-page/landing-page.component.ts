import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product/product.interface';
import { ProductsService } from '../services/product/product.service';
//import { FilterSearchPipe } from '../../filter/search.filter';


@Component({
	selector: 'landing-page',
	templateUrl: './landing-page.html',
	providers: [ProductsService]
})
export class LandingPageComponent implements OnInit {
	products : Product[];
	selectedProduct : Product

	constructor(private productsService: ProductsService){}

	onSelect(product: Product): void {
		this.selectedProduct = product;
		console.log(this.selectedProduct);
	}

	getProducts(): void{
		this.productsService.getProducts().then( products => this.products = products);
	}

	ngOnInit(): void {
		this.getProducts();
	}
}
import { Component, Input } from '@angular/core';
import { Product } from '../model/product/product.interface';
import { ProductsService } from '../services/product/product.service';

@Component({
	selector: 'product',
	templateUrl: './product.html'
}) 
export class ProductComponent{

	@Input() product: Product;
	total: number;


}

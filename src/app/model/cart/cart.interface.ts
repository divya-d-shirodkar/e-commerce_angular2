import { Product } from '../../model/product/product.interface';

export interface Cart {

	userId: string,
	products: Product[]

}
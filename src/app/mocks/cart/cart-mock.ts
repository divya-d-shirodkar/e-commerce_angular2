import { Cart } from '../../model/cart/cart.interface'

export const CARTLIST : Cart[] = [
	{
		userId: 'divya.dshirodkar@gmail.com',
		products: [
			{ id: 4,
			  name: 'Product 4',
			  image: 'http://placehold.it/400x250/000/fff', 
			  description: 'Description 4', 
			  price: 34,
			  quantity: 2
			},
			{ id: 5,
			  name: 'Product 5', 
			  image: 'http://placehold.it/400x250/000/fff', 
			  description: 'Description 5', 
			  price: 64,
			  quantity: 1
			},
		]
	},

	{
		userId: 'akshatamb@gmail.com',
		products: [
			{ id: 3,
			  name: 'Product 3',
			  image: 'http://placehold.it/400x250/000/fff', 
			  description: 'Description 3', 
			  price: 24,
			  quantity: 2
			},
			{ id: 5,
			  name: 'Product 5', 
			  image: 'http://placehold.it/400x250/000/fff', 
			  description: 'Description 5', 
			  price: 64,
			  quantity: 1
			},
		]
	}
];
import React, { useContext } from 'react';
import CartContext from '../contexts/CartContext';

// Components
import Item from './ShoppingCartItem';

const ShoppingCart = () => {
	const { cart, setCart } = useContext(CartContext);
	
	const getCartTotal = () => {
		return cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

	const remove =(id)=>{
		console.log('id',id);
		const newCart = cart.filter((item) => item.id !== parseInt(id));
		console.log('newCart', newCart)
		setCart(newCart);
	}

	return (
		<div className="shopping-cart">
			{cart.map(item => (
				<Item key={item.id} {...item} remove={remove}/>
			))}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;

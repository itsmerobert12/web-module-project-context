import React from 'react';

const Item = props => {

	console.log('props',props);

	const handleClick = (e)=> {
		console.log('e', e.target.id);
		props.remove(e.target.id)
	}

	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />


			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button onClick={handleClick} id={props.id}>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;

import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import CartHeader from '../components/CartHeader';
import CartFooter from '../components/CartFooter';
import CartItems from '../components/CartItems'

const ShoppingCart = () =>{
	return (
		<div>
			<CartHeader />
			<CartItems />
			<CartFooter copyright= '2017' />
		</div>
	)
}

export default ShoppingCart

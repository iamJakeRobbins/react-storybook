import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Timer from '../components/Timer';
import Message from '../components/Message';
import CartHeader from '../components/CartHeader';
import CartFooter from '../components/CartFooter';
import CartItems from '../components/CartItems'
import ShoppingCart from '../components/ShoppingCart'

storiesOf('Message', module)
  .add('gnar', () => <Message text="Hello world" />)
  .add("What's the time?", () => <Message text={new Date().toString()} />)
	.add('custom', () => <Message text = 'Baby steps now!' />)

	storiesOf('Timer', module)
  .add('Show', () => <Timer />)

	storiesOf('ShoppingCart', module)
	  .add('Header', () => <CartHeader />)
	  .add('Footer', () => <CartFooter copyright= '2017' />)
		.add('CartItems', () => <CartItems />)
		.add('ShoppingCart', () => <ShoppingCart />)

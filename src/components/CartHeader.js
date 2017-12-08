import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'

const CartHeader = () => {
  return (
<header className="row">
  <nav>
    <div className="container">
      <div className="nav-wrapper">
        <div className="col s12">
          <a href="/" className="brand-logo">Shopping Cart</a>
        </div>
      </div>
    </div>
  </nav>
</header>
)
}

export default CartHeader

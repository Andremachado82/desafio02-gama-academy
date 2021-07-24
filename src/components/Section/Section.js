
import React, { Component } from 'react'
import Products from './section/Products'
// import Details from './section/Details'
import {Route} from "react-router-dom"
// import Cart from './section/Cart'
// import Payment from './section/Payment'

// import { Container } from './styles';

function Section() {
  return (
    <section>
    <Route path="/" component={Products} exact />
    {/* <Route path="/produto" component={Products} exact  />
    <Route path="/produto/:id" component={Details} exact />
    <Route path="/carrinho" component={Cart}  exact/>
    <Route path="/pagamento" component={Payment} exact /> */}
</section>
  )
}

export default Section;
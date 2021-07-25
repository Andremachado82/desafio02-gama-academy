import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../components/Context'
import '../css/Product.css'
import { formatPrice } from '../util/format'

export class Products extends Component {

    static contextType = DataContext;

    render() {
        const { products, addCart } = this.context;
        return (
            <div id="product">
                {
                    products.map(product => (
                        <div className="card" key={product._id}>
                            <Link to={`/product/${product._id}`}>
                                <img src={product.src} alt="" />
                            </Link>
                            <div className="content">
                                <h3>
                                    <Link to={`/product/${product._id}`}>{product.title}</Link>
                                </h3>
                                <span>{formatPrice(product.price)}</span>
                                <p>{product.description}</p>
                                <button onClick={() => addCart(product._id)}>Adicionar ao Carrinho</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default Products;
import React, { Component } from 'react'
import { DataContext } from '../components/Context'
import { Link } from 'react-router-dom'
import Colors from './Colors'
import '../css/Details.css'


export class Detalhe extends Component {
    static contextType = DataContext;
    state = {
        product: []
    }

    getProduct = () => {
        if (this.props.match.params.id) {
            const res = this.context.products;
            const data = res.filter(item => {
                return item._id === this.props.match.params.id
            })
            this.setState({ product: data })
        }
    };

    componentDidMount() {
        this.getProduct();
    }



    render() {
        const { product } = this.state;
        const { addCart } = this.context;
        return (
            <>
                {
                    product.map(item => (
                        <div className="details" key={item._id}>
                            <img src={item.src} alt="" />
                            <div className="box">
                                <div className="row">
                                    <h2>{item.title}</h2>
                                    <span>R${item.price}</span>
                                </div>
                                <Colors colors={item.colors} />
                                <p>{item.description}</p>
                                <p>{item.content}</p>
                                <Link to="/cart" className="cart" onClick={() => addCart(item._id)}>
                                    Adicionar ao carrinho
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </>
        )
    }
}

export default Detalhe;
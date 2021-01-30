import React from 'react'
import {Link} from 'react-router-dom'
import products from '../products'

const ProductScreen = ({match}) => {
    const product = products.find(p => p._id == match.params.id);
    console.log(match.params.id)
    return <>
    <Link className="btn-go-back" to='/'>Go Back</Link>
    <div className="row">
        <div className="col-detail-first">
            <img src={product.image} alt={product.name}></img>
        </div>
        <div className="col-detail-sec">
            <div className="item-detail">
                <h3>{product.name}</h3>
                <h4>Price ${product.price}</h4>
                <h5>{product.description}</h5>
            </div>
        </div>
        <div className="col-sm-checkout">
            <p>Price ${product.price}</p>
            <p>Status: {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock' }</p>
            <button className='btn-details-checkout' type='button' disabled={product.countInStock === 0}>Add To Cart</button>
        </div>
    </div>
    </>
    
}

export default ProductScreen

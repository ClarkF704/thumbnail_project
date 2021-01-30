import React from 'react'
import {Link} from 'react-router-dom'

const Product = ({product}) => {
    return (
        <div className="card">
            <Link to={`/product/${product._id}`}>
                <img src={product.image}></img>
            </Link>
            <div className="card-body">
            <Link to={`/product/${product._id}`}>
                <div className="card-title">
                    <strong>{product.name}</strong>
                </div>
            </Link>
                <div className="card-text">
                    <p>${product.price}</p>
                </div>
            </div>
        </div>
    )
}

export default Product
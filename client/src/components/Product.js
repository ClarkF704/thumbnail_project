import React from 'react'
import {Link} from 'react-router-dom'

const Product = ({product}) => {
    return (
        <div className="card">
            <Link to={`/product/${product.ProductID}`}>
                <img src={product.PhotoName}></img>
            </Link>
            <div className="card-body">
            <Link to={`/product/${product.ProductID}`}>
                <div className="card-title">
                    <strong>{product.ItemName}</strong>
                </div>
            </Link>
                <div className="card-text">
                    <p>${product.BasePrice}</p>
                </div>
            </div>
        </div>
    )
}

export default Product
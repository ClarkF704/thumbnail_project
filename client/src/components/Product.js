import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'

const Product = ({product}) => {
    return (
        <div className="card">
            <Link to={`/product/${product.ProductID}`}>
                <img className="img-component" src={product.PhotoName}></img>
            </Link>
            <div className="card-body">
            <Link to={`/product/${product.ProductID}`} className="card-title-specific">
                <div className="card-title">
                    <p className="card-title-specific">{product.ItemName}</p>
                </div>
            </Link>
            <hr/>
                <div className="card-text">
                    <p className="product-com-price">${product.BasePrice}</p>
                </div>
            </div>
        </div>
    )
}

export default Product
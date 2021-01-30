import React from 'react'
import {Link} from 'react-router-dom'
import items from '../items'

const ProductScreen = ({match}) => {
    const product = items.find(p => p.ProductID == match.params.id);
    console.log(match.params.id)
    return <>
    <Link className="btn-go-back" to='/'>Go Back</Link>
    <div className="row">
        <div className="col-detail-first">
            <img src={product.PhotoName} alt={product.ItemName}></img>
        </div>
        <div className="col-detail-sec">
            <div className="item-detail">
                <h3>{product.ItemName}</h3>
                <h4>Price ${product.BasePrice}</h4>
                <h5>{product.Description}</h5>
            </div>
        </div>
        <div className="col-sm-checkout">
            <p>Price ${product.BasePrice}</p>
            <p>Status: {product.OnHandQuantity > 0 ? 'In Stock' : 'Out Of Stock' }</p>
            <button className='btn-details-checkout' type='button' disabled={product.OnHandQuantity < 0}>Add To Cart</button>
        </div>
    </div>
    </>
    
}

export default ProductScreen

import React from 'react'
import {Link} from 'react-router-dom'
import itemsJson from '../items.json'

const items = itemsJson.items
const ProductScreen = ({match}) => {
    const product = items.find(p => p.ProductID == match.params.id);
    console.log(match.params.id)
    return <>
    <div class="sidenav">
            <p>{product.ItemName}</p>
            <img className="img-cut" src={product.PhotoName} height="30px" width="30px" />
            <p>Price ${product.BasePrice}</p>
            <p>Status: {product.OnHandQuantity > 0 ? 'In Stock' : 'Out Of Stock' }</p>
            <hr />
            <button className='btn-details-checkout' type='button' disabled={product.OnHandQuantity < 0}>Add To Cart</button>
    </div>
    <div className="product-screen">
    <Link className="btn-go-back" to='/'>Go Back</Link>
    <div className="row">
        <div className="col-detail-first">
            <img className="product-page-img img-cut" src={product.PhotoName} alt={product.ItemName}></img>
        </div>
        <div className="col-detail-sec">
            <div className="item-detail">
                <h3 className="product-screen-item-name">{product.ItemName}</h3>
                <img className="manu-comp" src={` http://images.repzio.com/productimages/${product.ManufacturerID}/logo${product.ManufacturerID}_lg.jpg`} />
                <p className="product-desc">{product.Description}</p>
                <p>Item ID: <span className="product-dim">{product.ItemID}</span></p>
                <p>Product Dimensions: <span className="product-dim">{product.Dimensions}</span></p>
                <h4>Base Price ${product.BasePrice}</h4>
            </div>
        </div>
       
    </div>
    </div>
    </>
    
}

export default ProductScreen

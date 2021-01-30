import React from 'react'
import itemsJson from '../items.json'
import Product from '../components/Product'
import '../App.css'

const items = itemsJson.items
const HomeScreen = () => {
    return (
        <>
            <h1 className="latest-header">Latest Products</h1>
            <div className="row-hs">
                {items.map(product => (
                    <div className="col-prod">
                        <Product product={product} />
                    </div>
                ))}
            </div>
        </>
    )
}
export default HomeScreen

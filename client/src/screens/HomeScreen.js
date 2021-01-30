import React from 'react'
import items from '../items'
import Product from '../components/Product'
import '../App.css'

const HomeScreen = () => {
    return (
        <>
            <h1 className="latest-header">Latest Products</h1>
            <div className="row-hs">
                {items.map(product => (
                    <div className="col">
                        <Product product={product} />
                    </div>
                ))}
            </div>
        </>
    )
}
export default HomeScreen

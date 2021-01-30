import React from 'react'
import items from '../items'
import Product from '../components/Product'

const HomeScreen = () => {
    return (
        <>
            <h1>Latest Products</h1>
            <div className="row">
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

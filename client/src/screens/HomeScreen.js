import React from 'react'
import products from '../products'
import Product from '../components/Product'

const HomeScreen = () => {
    return (
        <>
            <h1>Latest Products</h1>
            <div className="row">
                {products.map(product => (
                    <div className="col">
                        <Product product={product} />
                    </div>
                ))}
            </div>
        </>
    )
}
export default HomeScreen

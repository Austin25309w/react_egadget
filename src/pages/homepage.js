import React from 'react'

import ProductListing from '../features/productList'

import data from '../database/products.json'

export default function Homepage(props){
    return <div>
        <h2 style={{textAlign:"left"}}>Welcome!</h2>
        <ProductListing  products={data.products} />
    </div>
}
import React from "react";
import { Link, useParams } from "react-router-dom";
import productsData from "../data/products.json";

function ProductDetail () {
    const { productId } = useParams();

    const productInfo = productsData.products[productId];

    const leftId = parseInt(productId) - 1;
    const rightId = parseInt(productId) + 1;

    const leftInfo = productsData.products[leftId];
    const rightInfo = productsData.products[rightId];

    return (
        <div>
            <h1>Product Details</h1>
            <p>{productInfo.name}</p>
            <p>{productInfo.description}</p>
            {leftInfo && <Link to={`/product/${leftId}`}><strong>{leftInfo.name}</strong></Link>}
            <br />
            {rightInfo && <Link to={`/product/${rightId}`}><strong>{rightInfo.name}</strong></Link>}
        </div>
    );
}

export default ProductDetail;
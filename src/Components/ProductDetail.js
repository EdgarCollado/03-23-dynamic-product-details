import React from "react";
import { useParams } from "react-router-dom";
import productsData from "../data/products.json";

function ProductDetail () {
    const { productId } = useParams();

    const productInfo = productsData.products[productId];

    return (
        <div>
            <h1>Product Detail</h1>
            <p>{productInfo.name}</p>
            <p>{productInfo.description}</p>
        </div>
    );
}

export default ProductDetail;
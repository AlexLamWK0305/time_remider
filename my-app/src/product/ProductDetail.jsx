import react, { useState, useEffect } from 'react'
import styles from './css/productDetail.css';
const ProductDetail = ({ productDisplayName, remainingQuantity, unitPrice }) => {

    return (
        <div className="font-sans subpixel-antialiased font-medium tracking-tight text-sm flex flex-col p-2 max-w-80 shadow-sm rounded-lg mb-3 normal-border">
            <div className="flex flex-row justify-between">
                <div className="mr-2">{productDisplayName}</div>
                <span>仲有: <span>{remainingQuantity}</span></span>
            </div>
            <span>$<span>{unitPrice}</span></span>
        </div>
    )
}
export default ProductDetail;
import react, { useState, useEffect } from 'react'
import styles from './css/productDetail.css';
const ProductDetail = ({ productDisplayName, remainingQuantity, unitPrice }) => {

    return (
        <div className="max-w-64 min-w-64 font-sans subpixel-antialiased font-medium tracking-tight text-sm flex flex-col p-2 shadow-sm rounded-lg mb-3 normal-border">
            <div className="flex flex-row justify-between w-full">
                <div className="mr-2 truncate" title={productDisplayName}>{productDisplayName}</div>
                <div className='text-nowrap'>仲有: <span>{remainingQuantity}</span></div>
            </div>
            <span>$<span>{unitPrice}</span></span>
        </div>
    )
}
export default ProductDetail;
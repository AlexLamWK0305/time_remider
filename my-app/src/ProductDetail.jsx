
const ProductDetail = ({ productDisplayName, remainingQuantity, unitPrice }) => {

    return (
        <div className="font-sans subpixel-antialiased font-medium tracking-tight text-sm flex flex-col p-2 max-w-80 shadow-sm rounded-lg ring-1 ring-slate-200 mb-3">
            <div className="flex flex-row justify-between">
                <div className="mr-2">{productDisplayName}</div>
                <span>仲有: <span>{remainingQuantity}</span></span>
            </div>
            <span>$<span>{unitPrice}</span></span>
        </div>
    )
}
export default ProductDetail;
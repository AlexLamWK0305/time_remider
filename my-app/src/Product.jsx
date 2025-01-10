import react, { useState, useEffect } from 'react'
import axios from 'axios'
import { GET_PRODUCT_URL } from './Const'
import ProductDetail from './ProductDetail'
const Product = ({ categoryData, twoDishLunchCategoryName, twoDishLunchIdList }) => {
    const [twoDishLunchList, setTwoDishLunchList] = useState([]);

    useEffect(() => {
        const fetchTwoDishLunchById = async () => {
            try {
                const twoDishProductList = []
                for (const id of twoDishLunchIdList) {
                    const response = await axios.post(
                        GET_PRODUCT_URL,
                        { id },
                        {
                            headers: {
                                accept: "*/*",
                                "accept-language": "en-US,en;q=0.9,zh-TW;q=0.8,zh;q=0.7",
                                "content-type": "application/json",
                                info: "eyJjIjoiSEsiLCJsIjoidGMiLCJwIjoiaGt0dm1hbGxjYW50ZWVuX3RzZXVuZ2t3YW5vIiwibyI6IjY0M2NjMTM1OTdjMmY4MTE1N2JhMDZiZSIsInQiOiJzdGFuZGFsb25lIiwiaWYiOmZhbHNlLCJobSI6ImFwcC5lYXRzMzY1cG9zLmNvbSIsImltIjpmYWxzZX0=",
                            },
                        }
                    );
                    // process data for "兩餸飯餐"
                    response.data.body.product.bundledItemList.filter(
                        product => product.categoryDisplayName.includes("兩餸飯餐")
                    ).map(filteredData => {
                        filteredData.productList.map(twoDishproduct => {
                            twoDishProductList.push({
                                categoryUID: twoDishproduct.categoryUID,
                                productDisplayName: twoDishproduct.productDisplayName,
                                remainingQuantity: twoDishproduct.remainingQuantity,
                                unitPrice: 25.0
                            })
                        })
                    });
                }
                setTwoDishLunchList(twoDishProductList);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchTwoDishLunchById();
    }, [twoDishLunchIdList]);

    console.log(categoryData)
    return (
        <div>
            <div>
                <p>{twoDishLunchCategoryName}</p>
                {
                    twoDishLunchList.map(product => {
                        return (
                            <ProductDetail
                                productDisplayName={product.productDisplayName}
                                remainingQuantity={product.remainingQuantity}
                                unitPrice={product.unitPrice}
                            />
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Product;
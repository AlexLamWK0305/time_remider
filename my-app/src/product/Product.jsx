import react, { useState, useEffect } from 'react'
import axios from 'axios'
import { GET_PRODUCT_URL } from '../Const'
import ProductDetail from './ProductDetail'
const Product = ({ categoryData, twoDishLunchIdList }) => {
    //const [twoDishLunchList, setTwoDishLunchList] = useState([]);
    // useEffect(() => {
    //     console.log(twoDishLunchIdList)

    //     const fetchTwoDishLunchById = async () => {
    //         try {
    //             const twoDishProductList = []
    //             for (const id of twoDishLunchIdList) {
    //                 const response = await axios.post(
    //                     GET_PRODUCT_URL,
    //                     { id },
    //                     {
    //                         headers: {
    //                             accept: "*/*",
    //                             "accept-language": "en-US,en;q=0.9,zh-TW;q=0.8,zh;q=0.7",
    //                             "content-type": "application/json",
    //                             info: "eyJjIjoiSEsiLCJsIjoidGMiLCJwIjoiaGt0dm1hbGxjYW50ZWVuX3RzZXVuZ2t3YW5vIiwibyI6IjY0M2NjMTM1OTdjMmY4MTE1N2JhMDZiZSIsInQiOiJzdGFuZGFsb25lIiwiaWYiOmZhbHNlLCJobSI6ImFwcC5lYXRzMzY1cG9zLmNvbSIsImltIjpmYWxzZX0=",
    //                         },
    //                     }
    //                 );
    //                 // process data for "兩餸飯餐"
    //                 let responseData = response.data.body.product;
    //                 let tempLunchList = {
    //                     "productUID:": responseData.productUID,
    //                     "displayDate": responseData.productDisplayName,
    //                     "productUnitPrice": responseData.unitPrice['TAKEOUT'],
    //                 }

    //                 responseData.bundledItemList.filter(
    //                     product => product.categoryDisplayName.includes("兩餸飯餐")
    //                 ).map(filteredData => {
    //                     tempLunchList.productList = filteredData.productList.map(twoDishproduct => {
    //                         return ({
    //                             "productUID": twoDishproduct.productUID,
    //                             "productDisplayName": twoDishproduct.productDisplayName,
    //                             "remainingQuantity": twoDishproduct.remainingQuantity,
    //                         })
    //                     })
    //                     twoDishProductList.push(tempLunchList)
    //                 });
    //             }
    //             setTwoDishLunchList(twoDishProductList);
    //         } catch (error) {
    //             console.error("Error fetching products:", error);
    //         }
    //     };
    //     fetchTwoDishLunchById();
    // }, [twoDishLunchIdList]);
    const twoDishLunchList = [
        {
            "productUID:": 10029617,
            "displayDate": "兩餸飯餐 11/1 (Online 外賣)",
            "productUnitPrice": 25,
            "productList": [
                {
                    "productUID": 9693843,
                    "productDisplayName": "免治牛肉腸仔 (Online)",
                    "remainingQuantity": 26
                },
                {
                    "productUID": 9200885,
                    "productDisplayName": "黑椒雞翼 (Online)",
                    "remainingQuantity": 24
                },
                {
                    "productUID": 8654946,
                    "productDisplayName": "薯仔炆排骨 (Online)",
                    "remainingQuantity": 17
                },
                {
                    "productUID": 9200896,
                    "productDisplayName": "日式咖哩雞皇 (Online)",
                    "remainingQuantity": 28
                }
            ]
        },
        {
            "productUID:": 10029657,
            "displayDate": "兩餸飯餐 12/1 (Online 外賣)",
            "productUnitPrice": 25,
            "productList": [
                {
                    "productUID": 9325787,
                    "productDisplayName": "茄汁炸雞脾 (Online)",
                    "remainingQuantity": 40
                },
                {
                    "productUID": 8411309,
                    "productDisplayName": "香茅豬扒 (Online)",
                    "remainingQuantity": 40
                },
                {
                    "productUID": 8559737,
                    "productDisplayName": "節瓜炆雞球 (Online)",
                    "remainingQuantity": 40
                },
                {
                    "productUID": 8280117,
                    "productDisplayName": "魚香茄子 (Online)",
                    "remainingQuantity": 40
                }
            ]
        },
        {
            "productUID:": 10030454,
            "displayDate": "兩餸飯餐 13/1 (Online 外賣)",
            "productUnitPrice": 25,
            "productList": [
                {
                    "productUID": 9719154,
                    "productDisplayName": "欖菜肉碎四季豆 (Online)",
                    "remainingQuantity": 70
                },
                {
                    "productUID": 8317780,
                    "productDisplayName": "西蘭花蠔油草菇 (Onlne)",
                    "remainingQuantity": 70
                },
                {
                    "productUID": 8399847,
                    "productDisplayName": "柱侯牛腩 (Online)",
                    "remainingQuantity": 70
                },
                {
                    "productUID": 8317845,
                    "productDisplayName": "燒汁豬肋骨 (Online)",
                    "remainingQuantity": 70
                },
                {
                    "productUID": 8559703,
                    "productDisplayName": "豆腐斑腩 (Online)",
                    "remainingQuantity": 70
                },
                {
                    "productUID": 8355982,
                    "productDisplayName": "瑤柱蒸水蛋 (Online)",
                    "remainingQuantity": 70
                },
                {
                    "productUID": 8280195,
                    "productDisplayName": "口水雞 (Online)",
                    "remainingQuantity": 70
                }
            ]
        }
    ]
    console.log(categoryData);
    return (
        <div className='flex flex-row'>
            <div className='flex flex-row'>
                {
                    twoDishLunchList.map(twoDishLunch => {
                        return (
                            <div className='mr-5'>
                                <h2>{twoDishLunch.displayDate}</h2>
                                {
                                    twoDishLunch.productList.map(product => {
                                        return (
                                            <ProductDetail
                                                productDisplayName={product.productDisplayName}
                                                remainingQuantity={product.remainingQuantity}
                                                unitPrice={twoDishLunch.productUnitPrice}
                                            />
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
            <div>
                {
                    categoryData.map(category => {
                        return (
                            <div>
                                <h2>{category.categoryDisplayName}</h2>
                                <div className='flex flex-row'>
                                    {
                                        category.productList.map(product => {
                                            return (
                                                <ProductDetail
                                                    productDisplayName={product.productDisplayName}
                                                    remainingQuantity={product.remainingQuantity}
                                                    unitPrice={product.productUnitPrice}
                                                />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Product;
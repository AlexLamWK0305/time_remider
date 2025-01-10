import { useEffect, useState } from 'react';
import axios from 'axios';
import Product from './Product';
import { GET_CATEGORY_URL, ESCLUDE_CATEGORY } from './Const'
const Category = () => {
    const [categoryData, setCategoryData] = useState([]);
    const [twoDishLunchIdList, setTwoDishLunchIdList] = useState([]);
    const [twoDishLunchCategoryName, setTwoDishLunchCategoryName] = useState([]);
    useEffect(() => {
        fetectCategoryData();
    }, []);

    const fetectCategoryData = async () => {
        const data = await axios.post(GET_CATEGORY_URL, {},
            {
                headers: {
                    "accept": "*/*",
                    "accept-language": "en-US,en;q=0.9,zh-TW;q=0.8,zh;q=0.7",
                    "content-type": "application/json",
                    "etag": "undefined",
                    "info": "eyJjIjoiSEsiLCJsIjoidGMiLCJwIjoiaGt0dm1hbGxjYW50ZWVuX3RzZXVuZ2t3YW5vIiwibyI6IjY0M2NjMTM1OTdjMmY4MTE1N2JhMDZiZSIsInQiOiJzdGFuZGFsb25lIiwiaWYiOmZhbHNlLCJobSI6ImFwcC5lYXRzMzY1cG9zLmNvbSIsImltIjpmYWxzZX0=",
                },
            }
        );

        const availableCategory = data.data.categoryList.filter(
            category => category.status === 0 &&
                !ESCLUDE_CATEGORY.includes(category.categoryDisplayName)
        );

        setCategoryData(availableCategory.map(c => ({
            categoryUID: c.categoryUID,
            categoryDisplayName: c.categoryDisplayName,
            productList: c.productList
        })));

        const twoDishIdList = [];
        data.data.categoryList.filter(
            category => category.categoryDisplayName === "兩餸飯餐 (12:00-14:00)"
        ).map(product => {
            setTwoDishLunchCategoryName(product.categoryDisplayName)
            product.productList.map(product => {
                twoDishIdList.push(product.productUID)
            })
        });
        setTwoDishLunchIdList(twoDishIdList);

        // const mappedProduct = availableCategory.map(category => {
        //     return category.productList.map(product => ({
        //         productUID: product.productUID,
        //         productDisplayName: product.productDisplayName,
        //         remainingQuantity: product.remainingQuantity
        //     }))
        // })
    }

    return (
        <div>
            <Product
                categoryData={categoryData}
                twoDishLunchCategoryName={twoDishLunchCategoryName}
                twoDishLunchIdList={twoDishLunchIdList}
            />
        </div>
    )
}



export default Category
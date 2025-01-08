import axios from 'axios';
import react, { useEffect, useState } from 'react'


const TodayProducts = () => {

    const [todayProducts, setTodayProducts] = useState()

    const url = "hk/web-api/restaurant/product";
    useEffect(() => {
        const fetechData = async () => {
            try {
                const data = await axios.post(
                    url,
                    {
                        "id": 10012608
                    },
                    {
                        headers: {
                            "accept": "*/*",
                            "accept-language": "en-US,en;q=0.9,zh-TW;q=0.8,zh;q=0.7",
                            "content-type": "application/json",
                            "info": "eyJjIjoiSEsiLCJsIjoidGMiLCJwIjoiaGt0dm1hbGxjYW50ZWVuX3RzZXVuZ2t3YW5vIiwibyI6IjY0M2NjMTM1OTdjMmY4MTE1N2JhMDZiZSIsInQiOiJzdGFuZGFsb25lIiwiaWYiOmZhbHNlLCJobSI6ImFwcC5lYXRzMzY1cG9zLmNvbSIsImltIjpmYWxzZX0=",
                        },
                    }
                );
                const product = data.data.body.product;
                const lunchList = product.bundledItemList[0].productList;
                setTodayProducts(lunchList.map(lunch => ({
                    productDisplayName: lunch.productDisplayName,
                    remainingQuantity: lunch.remainingQuantity
                })))

            } catch (err) {
                console.log(err)
            }
        }
        fetechData();
    }, []);
    return (
        <div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Qty</th>
                </tr>
                {
                    todayProducts.map((product) => {
                        return (
                            <tr>
                                <td>{product.productDisplayName}</td>
                                <td>{product.remainingQuantity}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}

export default TodayProducts;
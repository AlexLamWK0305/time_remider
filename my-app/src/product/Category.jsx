import { useEffect, useState } from 'react';
import axios from 'axios';
import Product from './Product';
import { GET_CATEGORY_URL, ESCLUDE_CATEGORY } from '../Const'

const Category = () => {

    const twoDishLunchIdList = [
        8387393,
        10029617,
        10029657,
        10030454
    ]
    const categoryData = [
        {
            "categoryUID": 1201569,
            "categoryDisplayName": "每日時令水果 (08:15-17:00)",
            "productList": [
                {
                    "productUID": 9861640,
                    "productDisplayName": "每日水果 - 香蕉（Online）",
                    "startDate": 1733068800000,
                    "pricingType": 0,
                    "unitPrice": {
                        "TAKEOUT": 2
                    },
                    "remainingQuantity": 0,
                    "itemTypeUID": 1,
                    "isTakeout": true,
                    "isPickupEnabled": true,
                    "promotionMediaList": []
                },
                {
                    "productUID": 9979392,
                    "productDisplayName": "每日水果 -  日本冬戀蘋果（Online）",
                    "startDate": 1733068800000,
                    "pricingType": 0,
                    "unitPrice": {
                        "TAKEOUT": 12
                    },
                    "remainingQuantity": 0,
                    "itemTypeUID": 1,
                    "isTakeout": true,
                    "isPickupEnabled": true,
                    "promotionMediaList": []
                }
            ]
        },
        {
            "categoryUID": 1127651,
            "categoryDisplayName": "三文治餐 (08:15-10:00)",
            "productList": [
                {
                    "productUID": 8073543,
                    "productDisplayName": "餐肉蛋三文治餐",
                    "startDate": 1672502400000,
                    "endDate": 4102415999000,
                    "pricingType": 0,
                    "unitPrice": {
                        "TAKEOUT": 15
                    },
                    "remainingQuantity": 0,
                    "itemTypeUID": 17075,
                    "isTakeout": true,
                    "isPickupEnabled": true,
                    "promotionMediaList": [],
                    "isBundled": true,
                    "hasAddOnPrice": true
                },
                {
                    "productUID": 8073544,
                    "productDisplayName": "咸牛肉煎蛋三文治餐",
                    "startDate": 1672502400000,
                    "endDate": 4102415999000,
                    "pricingType": 0,
                    "unitPrice": {
                        "TAKEOUT": 15
                    },
                    "remainingQuantity": 0,
                    "itemTypeUID": 17075,
                    "isTakeout": true,
                    "isPickupEnabled": true,
                    "isCrossDayPreOrderSupported": true,
                    "promotionMediaList": [],
                    "isBundled": true,
                    "hasAddOnPrice": true
                },
                {
                    "productUID": 8073545,
                    "productDisplayName": "碎蛋沙律三文治餐",
                    "startDate": 1672502400000,
                    "endDate": 4102415999000,
                    "pricingType": 0,
                    "unitPrice": {
                        "TAKEOUT": 15
                    },
                    "remainingQuantity": 2,
                    "itemTypeUID": 17075,
                    "isTakeout": true,
                    "isPickupEnabled": true,
                    "isCrossDayPreOrderSupported": true,
                    "promotionMediaList": [],
                    "isBundled": true,
                    "hasAddOnPrice": true
                },
                {
                    "productUID": 8356234,
                    "productDisplayName": "吞拿魚粟米三文治餐",
                    "startDate": 1672502400000,
                    "endDate": 4102415999000,
                    "pricingType": 0,
                    "unitPrice": {
                        "TAKEOUT": 15
                    },
                    "remainingQuantity": 0,
                    "itemTypeUID": 17075,
                    "isTakeout": true,
                    "isPickupEnabled": true,
                    "isCrossDayPreOrderSupported": true,
                    "promotionMediaList": [],
                    "isBundled": true,
                    "hasAddOnPrice": true
                },
                {
                    "productUID": 8073550,
                    "productDisplayName": "雙拼三文治 (單叫)",
                    "startDate": 1672502400000,
                    "endDate": 4102415999000,
                    "pricingType": 0,
                    "unitPrice": {
                        "TAKEOUT": 12
                    },
                    "remainingQuantity": 0,
                    "itemTypeUID": 17075,
                    "isTakeout": true,
                    "isPickupEnabled": true,
                    "promotionMediaList": [],
                    "isBundled": true
                },
                {
                    "productUID": 9918063,
                    "productDisplayName": "火腿蛋三文治餐",
                    "startDate": 1672502400000,
                    "endDate": 4102415999000,
                    "pricingType": 0,
                    "unitPrice": {
                        "TAKEOUT": 15
                    },
                    "remainingQuantity": 2,
                    "itemTypeUID": 17075,
                    "isTakeout": true,
                    "isPickupEnabled": true,
                    "promotionMediaList": [],
                    "isBundled": true,
                    "hasAddOnPrice": true
                }
            ]
        },
        {
            "categoryUID": 1127652,
            "categoryDisplayName": "點心餐 (08:15-10:00)",
            "productList": [
                {
                    "productUID": 8073553,
                    "productDisplayName": "早餐炒粉麵餐",
                    "startDate": 1672502400000,
                    "endDate": 4102415999000,
                    "pricingType": 0,
                    "unitPrice": {
                        "TAKEOUT": 15
                    },
                    "remainingQuantity": 0,
                    "itemTypeUID": 17075,
                    "isTakeout": true,
                    "isPickupEnabled": true,
                    "isCrossDayPreOrderSupported": true,
                    "promotionMediaList": [],
                    "isBundled": true,
                    "hasAddOnPrice": true
                },
                {
                    "productUID": 8280893,
                    "productDisplayName": "早餐炒粉麵",
                    "startDate": 1672502400000,
                    "endDate": 4102415999000,
                    "pricingType": 0,
                    "unitPrice": {
                        "TAKEOUT": 13
                    },
                    "remainingQuantity": 0,
                    "itemTypeUID": 17075,
                    "isTakeout": true,
                    "isPickupEnabled": true,
                    "promotionMediaList": [],
                    "isBundled": true,
                    "hasAddOnPrice": true
                },
                {
                    "productUID": 8073552,
                    "productDisplayName": "糯米雞餐",
                    "startDate": 1672502400000,
                    "endDate": 4102415999000,
                    "pricingType": 0,
                    "unitPrice": {
                        "TAKEOUT": 15
                    },
                    "remainingQuantity": 2,
                    "itemTypeUID": 17075,
                    "isTakeout": true,
                    "isPickupEnabled": true,
                    "isCrossDayPreOrderSupported": true,
                    "promotionMediaList": [],
                    "isBundled": true,
                    "hasAddOnPrice": true
                },
                {
                    "productUID": 8280889,
                    "productDisplayName": "糯米雞",
                    "startDate": 1672502400000,
                    "endDate": 4102415999000,
                    "pricingType": 0,
                    "unitPrice": {
                        "TAKEOUT": 13
                    },
                    "remainingQuantity": 1,
                    "itemTypeUID": 17075,
                    "isTakeout": true,
                    "isPickupEnabled": true,
                    "isCrossDayPreOrderSupported": true,
                    "promotionMediaList": [],
                    "isBundled": true,
                    "hasAddOnPrice": true
                },
                {
                    "productUID": 8073555,
                    "productDisplayName": "雙拼點心餐",
                    "startDate": 1672502400000,
                    "endDate": 4102415999000,
                    "pricingType": 0,
                    "unitPrice": {
                        "TAKEOUT": 15
                    },
                    "remainingQuantity": 2,
                    "itemTypeUID": 17075,
                    "isTakeout": true,
                    "isPickupEnabled": true,
                    "isCrossDayPreOrderSupported": true,
                    "promotionMediaList": [],
                    "isBundled": true,
                    "hasAddOnPrice": true
                },
                {
                    "productUID": 8287598,
                    "productDisplayName": "雙拼點心",
                    "startDate": 1672502400000,
                    "endDate": 4102415999000,
                    "pricingType": 0,
                    "unitPrice": {
                        "TAKEOUT": 13
                    },
                    "remainingQuantity": 6,
                    "itemTypeUID": 17075,
                    "isTakeout": true,
                    "isPickupEnabled": true,
                    "promotionMediaList": [],
                    "isBundled": true,
                    "hasAddOnPrice": true
                },
                {
                    "productUID": 8280819,
                    "productDisplayName": "燒賣餐(10粒)",
                    "startDate": 1672502400000,
                    "endDate": 4102415999000,
                    "pricingType": 0,
                    "unitPrice": {
                        "TAKEOUT": 15
                    },
                    "remainingQuantity": 7,
                    "itemTypeUID": 17075,
                    "isTakeout": true,
                    "isPickupEnabled": true,
                    "promotionMediaList": [],
                    "isBundled": true,
                    "hasAddOnPrice": true
                },
                {
                    "productUID": 8287597,
                    "productDisplayName": "燒賣 (10粒)",
                    "startDate": 1672502400000,
                    "endDate": 4102415999000,
                    "pricingType": 0,
                    "unitPrice": {
                        "TAKEOUT": 13
                    },
                    "remainingQuantity": 7,
                    "itemTypeUID": 17075,
                    "isTakeout": true,
                    "isPickupEnabled": true,
                    "isCrossDayPreOrderSupported": true,
                    "promotionMediaList": [],
                    "isBundled": true,
                    "hasAddOnPrice": true
                },
                {
                    "productUID": 8398907,
                    "productDisplayName": "燒賣 (6粒)",
                    "startDate": 1672502400000,
                    "endDate": 4102415999000,
                    "pricingType": 0,
                    "unitPrice": {
                        "TAKEOUT": 8
                    },
                    "remainingQuantity": 5,
                    "itemTypeUID": 17075,
                    "isTakeout": true,
                    "isPickupEnabled": true,
                    "isCrossDayPreOrderSupported": true,
                    "promotionMediaList": [],
                    "isBundled": true,
                    "hasAddOnPrice": true
                },
                {
                    "productUID": 9018791,
                    "productDisplayName": "咖哩魚蛋餐(10粒)",
                    "startDate": 1713110400000,
                    "endDate": 4102415999000,
                    "pricingType": 0,
                    "unitPrice": {
                        "TAKEOUT": 15
                    },
                    "remainingQuantity": 0,
                    "itemTypeUID": 17075,
                    "isTakeout": true,
                    "isPickupEnabled": true,
                    "promotionMediaList": [],
                    "isBundled": true,
                    "hasAddOnPrice": true
                },
                {
                    "productUID": 9018793,
                    "productDisplayName": "咖哩魚蛋 (10粒)",
                    "startDate": 1713110400000,
                    "endDate": 4102415999000,
                    "pricingType": 0,
                    "unitPrice": {
                        "TAKEOUT": 13
                    },
                    "remainingQuantity": 0,
                    "itemTypeUID": 17075,
                    "isTakeout": true,
                    "isPickupEnabled": true,
                    "isCrossDayPreOrderSupported": true,
                    "promotionMediaList": [],
                    "isBundled": true,
                    "hasAddOnPrice": true
                },
                {
                    "productUID": 9018795,
                    "productDisplayName": "咖哩魚蛋 (6粒)",
                    "startDate": 1713110400000,
                    "endDate": 4102415999000,
                    "pricingType": 0,
                    "unitPrice": {
                        "TAKEOUT": 8
                    },
                    "remainingQuantity": 0,
                    "itemTypeUID": 17075,
                    "isTakeout": true,
                    "isPickupEnabled": true,
                    "isCrossDayPreOrderSupported": true,
                    "promotionMediaList": [],
                    "isBundled": true,
                    "hasAddOnPrice": true
                },
                {
                    "productUID": 8568966,
                    "productDisplayName": "牛肉 (2粒)",
                    "startDate": 1672502400000,
                    "endDate": 4102415999000,
                    "pricingType": 0,
                    "unitPrice": {
                        "TAKEOUT": 8
                    },
                    "remainingQuantity": 2,
                    "itemTypeUID": 17075,
                    "isTakeout": true,
                    "isPickupEnabled": true,
                    "isCrossDayPreOrderSupported": true,
                    "promotionMediaList": [],
                    "isBundled": true,
                    "hasAddOnPrice": true
                },
                {
                    "productUID": 8568980,
                    "productDisplayName": "粉果 (2粒)",
                    "startDate": 1672502400000,
                    "endDate": 4102415999000,
                    "pricingType": 0,
                    "unitPrice": {
                        "TAKEOUT": 8
                    },
                    "remainingQuantity": 2,
                    "itemTypeUID": 17075,
                    "isTakeout": true,
                    "isPickupEnabled": true,
                    "isCrossDayPreOrderSupported": true,
                    "promotionMediaList": [],
                    "isBundled": true,
                    "hasAddOnPrice": true
                }
            ]
        },
        {
            "categoryUID": 1127653,
            "categoryDisplayName": "雙拼粉麵餐 (08:15-10:00)",
            "productList": [
                {
                    "productUID": 8073556,
                    "productDisplayName": "雙拼粉麵餐",
                    "startDate": 1672502400000,
                    "endDate": 4102415999000,
                    "pricingType": 0,
                    "unitPrice": {
                        "TAKEOUT": 15
                    },
                    "remainingQuantity": -1,
                    "itemTypeUID": 17075,
                    "isTakeout": true,
                    "isPickupEnabled": true,
                    "promotionMediaList": [],
                    "isBundled": true,
                    "hasAddOnPrice": true
                },
                {
                    "productUID": 8279923,
                    "productDisplayName": "雙拼粉麵",
                    "startDate": 1672502400000,
                    "endDate": 4102415999000,
                    "pricingType": 0,
                    "unitPrice": {
                        "TAKEOUT": 13
                    },
                    "remainingQuantity": -1,
                    "itemTypeUID": 17075,
                    "isTakeout": true,
                    "isPickupEnabled": true,
                    "promotionMediaList": [],
                    "isBundled": true,
                    "hasAddOnPrice": true
                }
            ]
        },
        {
            "categoryUID": 1153832,
            "categoryDisplayName": "其他午餐 (炒粉麵飯/焗飯或意粉) 12:00-14:00",
            "productList": [
                {
                    "productUID": 10008558,
                    "productDisplayName": "香蒜蜆肉焗天使麵 11/1 (Online 外賣)",
                    "startDate": 1736438400000,
                    "endDate": 1736611199000,
                    "pricingType": 0,
                    "unitPrice": {
                        "TAKEOUT": 20
                    },
                    "remainingQuantity": 3,
                    "itemTypeUID": 17077,
                    "isTakeout": true,
                    "isPickupEnabled": true,
                    "promotionMediaList": [],
                    "isBundled": true,
                    "hasAddOnPrice": true
                },
                {
                    "productUID": 10008563,
                    "productDisplayName": "焗芝士肉醬司華力腸意粉 12/1 (Online 外賣)",
                    "startDate": 1736524800000,
                    "endDate": 1736697599000,
                    "pricingType": 0,
                    "unitPrice": {
                        "TAKEOUT": 20
                    },
                    "remainingQuantity": 3,
                    "itemTypeUID": 17077,
                    "isTakeout": true,
                    "isPickupEnabled": true,
                    "promotionMediaList": [],
                    "isBundled": true,
                    "hasAddOnPrice": true
                },
                {
                    "productUID": 10008574,
                    "productDisplayName": "意式焗漢堡扒芝士腸飯 13/1 (Online 外賣)",
                    "startDate": 1736611200000,
                    "endDate": 1736783999000,
                    "pricingType": 0,
                    "unitPrice": {
                        "TAKEOUT": 20
                    },
                    "remainingQuantity": 3,
                    "itemTypeUID": 17077,
                    "isTakeout": true,
                    "isPickupEnabled": true,
                    "promotionMediaList": [],
                    "isBundled": true,
                    "hasAddOnPrice": true
                },
                {
                    "productUID": 10008591,
                    "productDisplayName": "干燒伊麵 13/1 (Online 外賣)",
                    "startDate": 1736611200000,
                    "endDate": 1736783999000,
                    "pricingType": 0,
                    "unitPrice": {
                        "TAKEOUT": 25
                    },
                    "remainingQuantity": 3,
                    "itemTypeUID": 17077,
                    "isTakeout": true,
                    "isPickupEnabled": true,
                    "promotionMediaList": [],
                    "isBundled": true,
                    "hasAddOnPrice": true
                }
            ]
        },
        {
            "categoryUID": 1153834,
            "categoryDisplayName": "其他午餐 (包餐/湯麵) 12:00-14:00",
            "productList": [
                {
                    "productUID": 10002442,
                    "productDisplayName": "芝士煙肉吞拿魚牛角包拼七味粉司華力腸 13/1 (Online 外賣)",
                    "startDate": 1736611200000,
                    "endDate": 1736783999000,
                    "pricingType": 0,
                    "unitPrice": {
                        "TAKEOUT": 25
                    },
                    "remainingQuantity": 3,
                    "itemTypeUID": 17077,
                    "isTakeout": true,
                    "isPickupEnabled": true,
                    "promotionMediaList": [],
                    "isBundled": true,
                    "hasAddOnPrice": true
                },
                {
                    "productUID": 10002449,
                    "productDisplayName": "香矛雞翼墨丸辛辣麵 13/1 (Online 外賣)",
                    "startDate": 1736611200000,
                    "endDate": 1736783999000,
                    "pricingType": 0,
                    "unitPrice": {
                        "TAKEOUT": 20
                    },
                    "remainingQuantity": 5,
                    "itemTypeUID": 17077,
                    "isTakeout": true,
                    "isPickupEnabled": true,
                    "promotionMediaList": [],
                    "isBundled": true,
                    "hasAddOnPrice": true
                }
            ]
        },
        {
            "categoryUID": 1127665,
            "categoryDisplayName": "下午茶餐 (15:30-17:00)",
            "productList": [
                {
                    "productUID": 8073981,
                    "productDisplayName": "奶醬多",
                    "startDate": 1672502400000,
                    "endDate": 4102415999000,
                    "pricingType": 0,
                    "unitPrice": {
                        "TAKEOUT": 15
                    },
                    "remainingQuantity": -1,
                    "itemTypeUID": 17078,
                    "isTakeout": true,
                    "isPickupEnabled": true,
                    "promotionMediaList": [],
                    "isBundled": true,
                    "hasAddOnPrice": true
                },
                {
                    "productUID": 8073982,
                    "productDisplayName": "奶油多",
                    "startDate": 1672502400000,
                    "endDate": 4102415999000,
                    "pricingType": 0,
                    "unitPrice": {
                        "TAKEOUT": 15
                    },
                    "remainingQuantity": -1,
                    "itemTypeUID": 17078,
                    "isTakeout": true,
                    "isPickupEnabled": true,
                    "promotionMediaList": [],
                    "isBundled": true,
                    "hasAddOnPrice": true
                },
                {
                    "productUID": 8073990,
                    "productDisplayName": "西多士",
                    "startDate": 1672502400000,
                    "endDate": 4102415999000,
                    "pricingType": 0,
                    "unitPrice": {
                        "TAKEOUT": 18
                    },
                    "remainingQuantity": -1,
                    "itemTypeUID": 17078,
                    "isTakeout": true,
                    "isPickupEnabled": true,
                    "promotionMediaList": [],
                    "isBundled": true,
                    "hasAddOnPrice": true
                },
                {
                    "productUID": 8287625,
                    "productDisplayName": "咖哩角拼薯條",
                    "startDate": 1672502400000,
                    "endDate": 4102415999000,
                    "pricingType": 0,
                    "unitPrice": {
                        "TAKEOUT": 18
                    },
                    "remainingQuantity": -1,
                    "itemTypeUID": 17078,
                    "isTakeout": true,
                    "isPickupEnabled": true,
                    "promotionMediaList": [],
                    "isBundled": true,
                    "hasAddOnPrice": true
                },
                {
                    "productUID": 8287631,
                    "productDisplayName": "春卷拼薯條",
                    "startDate": 1672502400000,
                    "endDate": 4102415999000,
                    "pricingType": 0,
                    "unitPrice": {
                        "TAKEOUT": 18
                    },
                    "remainingQuantity": -1,
                    "itemTypeUID": 17078,
                    "isTakeout": true,
                    "isPickupEnabled": true,
                    "promotionMediaList": [],
                    "isBundled": true,
                    "hasAddOnPrice": true
                },
                {
                    "productUID": 8287632,
                    "productDisplayName": "墨魚丸拼薯條",
                    "startDate": 1672502400000,
                    "endDate": 4102415999000,
                    "pricingType": 0,
                    "unitPrice": {
                        "TAKEOUT": 18
                    },
                    "remainingQuantity": -1,
                    "itemTypeUID": 17078,
                    "isTakeout": true,
                    "isPickupEnabled": true,
                    "promotionMediaList": [],
                    "isBundled": true,
                    "hasAddOnPrice": true
                },
                {
                    "productUID": 8287635,
                    "productDisplayName": "鹵水雞髀拼薯條",
                    "startDate": 1672502400000,
                    "endDate": 4102415999000,
                    "pricingType": 0,
                    "unitPrice": {
                        "TAKEOUT": 18
                    },
                    "remainingQuantity": 0,
                    "itemTypeUID": 17078,
                    "isTakeout": true,
                    "isPickupEnabled": true,
                    "promotionMediaList": [],
                    "isBundled": true,
                    "hasAddOnPrice": true
                },
                {
                    "productUID": 8287639,
                    "productDisplayName": "鹵水雞翼拼薯條",
                    "startDate": 1672502400000,
                    "endDate": 4102415999000,
                    "pricingType": 0,
                    "unitPrice": {
                        "TAKEOUT": 18
                    },
                    "remainingQuantity": 7,
                    "itemTypeUID": 17078,
                    "isTakeout": true,
                    "isPickupEnabled": true,
                    "promotionMediaList": [],
                    "isBundled": true,
                    "hasAddOnPrice": true
                },
                {
                    "productUID": 8287643,
                    "productDisplayName": "炸雞髀拼薯條",
                    "startDate": 1672502400000,
                    "endDate": 4102415999000,
                    "pricingType": 0,
                    "unitPrice": {
                        "TAKEOUT": 18
                    },
                    "remainingQuantity": -1,
                    "itemTypeUID": 17078,
                    "isTakeout": true,
                    "isPickupEnabled": true,
                    "promotionMediaList": [],
                    "isBundled": true,
                    "hasAddOnPrice": true
                },
                {
                    "productUID": 8287644,
                    "productDisplayName": "炸雞翼拼薯條",
                    "startDate": 1672502400000,
                    "endDate": 4102415999000,
                    "pricingType": 0,
                    "unitPrice": {
                        "TAKEOUT": 18
                    },
                    "remainingQuantity": -1,
                    "itemTypeUID": 17078,
                    "isTakeout": true,
                    "isPickupEnabled": true,
                    "promotionMediaList": [],
                    "isBundled": true,
                    "hasAddOnPrice": true
                },
                {
                    "productUID": 9018810,
                    "productDisplayName": "咖哩魚蛋餐(10粒)",
                    "startDate": 1713110400000,
                    "endDate": 4102415999000,
                    "pricingType": 0,
                    "unitPrice": {
                        "TAKEOUT": 15
                    },
                    "remainingQuantity": -1,
                    "itemTypeUID": 17078,
                    "isTakeout": true,
                    "isPickupEnabled": true,
                    "promotionMediaList": [],
                    "isBundled": true,
                    "hasAddOnPrice": true
                }
            ]
        }
    ]
    // const [categoryData, setCategoryData] = useState([]);
    // const [twoDishLunchIdList, setTwoDishLunchIdList] = useState([]);
    // const [twoDishLunchCategoryName, setTwoDishLunchCategoryName] = useState([]);
    // useEffect(() => {
    //     fetectCategoryData();
    // }, []);

    // const fetectCategoryData = async () => {
    //     const data = await axios.post(GET_CATEGORY_URL, {},
    //         {
    //             headers: {
    //                 "accept": "*/*",
    //                 "accept-language": "en-US,en;q=0.9,zh-TW;q=0.8,zh;q=0.7",
    //                 "content-type": "application/json",
    //                 "etag": "undefined",
    //                 "info": "eyJjIjoiSEsiLCJsIjoidGMiLCJwIjoiaGt0dm1hbGxjYW50ZWVuX3RzZXVuZ2t3YW5vIiwibyI6IjY0M2NjMTM1OTdjMmY4MTE1N2JhMDZiZSIsInQiOiJzdGFuZGFsb25lIiwiaWYiOmZhbHNlLCJobSI6ImFwcC5lYXRzMzY1cG9zLmNvbSIsImltIjpmYWxzZX0=",
    //             },
    //         }
    //     );

    //     const availableCategory = data.data.categoryList.filter(
    //         category => category.status === 0 &&
    //             !ESCLUDE_CATEGORY.includes(category.categoryDisplayName)
    //     );

    //     setCategoryData(availableCategory.map(c => ({
    //         categoryUID: c.categoryUID,
    //         categoryDisplayName: c.categoryDisplayName,
    //         productList: c.productList
    //     })));

    //     const twoDishIdList = [];
    //     data.data.categoryList.filter(
    //         category => category.categoryDisplayName === "兩餸飯餐 (12:00-14:00)"
    //     ).map(product => {
    //         setTwoDishLunchCategoryName(product.categoryDisplayName)
    //         product.productList.map(product => {
    //             twoDishIdList.push(product.productUID)
    //         })
    //     });
    //     setTwoDishLunchIdList(twoDishIdList);

    //     // const mappedProduct = availableCategory.map(category => {
    //     //     return category.productList.map(product => ({
    //     //         productUID: product.productUID,
    //     //         productDisplayName: product.productDisplayName,
    //     //         remainingQuantity: product.remainingQuantity
    //     //     }))
    //     // })
    // }

    return (
        <div>
            <Product
                categoryData={categoryData}
                twoDishLunchIdList={twoDishLunchIdList}
            />
        </div>
    )
}



export default Category
import React, { useEffect, useState } from 'react';
import axios from "axios"

const Item = () => {
  const [category, setCategory] = useState([]);
  const [itemQuantity, setItemQuantity] = useState([{ id: Number, quantity: Number }]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("/hk/web-api/restaurant/details/get", {}, {
          headers: {
            "accept": "*/*",
            "accept-language": "en-US,en;q=0.9,zh-TW;q=0.8,zh;q=0.7",
            "content-type": "application/json",
            "etag": "undefined",
            "info": "eyJjIjoiSEsiLCJsIjoidGMiLCJwIjoiaGt0dm1hbGxjYW50ZWVuX3RzZXVuZ2t3YW5vIiwibyI6IjY0M2NjMTM1OTdjMmY4MTE1N2JhMDZiZSIsInQiOiJzdGFuZGFsb25lIiwiaWYiOmZhbHNlLCJobSI6ImFwcC5lYXRzMzY1cG9zLmNvbSIsImltIjpmYWxzZX0=",
          },
        });

        const idList = response.data.categoryList[4].productList;
        idList.shift();
        console.log(idList);

      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  
  return (
    <div>
        {

        }
    </div>
  );
};

export default Item;

import HotDealCard from "./HotDealCard";
import axios from "axios";
import { useState, useEffect } from "react";

export default function HotDealsList() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/items/");
        setApiData(response.data);
      } catch (error) {
        console.log("API call failed:", error);
      }
    }
    fetchData();
  }, [apiData]);

  return (
    <div className="">
      <span className="font-medium">Hot Deals</span>
      <div>
        {apiData.map((data) => (
          <HotDealCard
            itemName={data.title}
            itemDesc={data.description.substring(0, 41)}
            imgURL={data.imgURL}
            oldPrice={data.price}
            newPrice={data.discount ? data.discount.newPrice : data.price}
          />
        ))}
      </div>
    </div>
  );
}

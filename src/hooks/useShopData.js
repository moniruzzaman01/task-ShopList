import { useState } from "react";

const useShopData = () => {
  const data = [
    {
      id: "1",
      name: "Shop-A",
      area: "Thane",
      category: "Grocery",
      openingDate: "2022-06-13",
      closingDate: "2022-12-13",
    },
    {
      id: "2",
      name: "Shop-B",
      area: "Pune",
      category: "Butcher",
      openingDate: "2022-01-13",
      closingDate: "2022-11-13",
    },
    {
      id: "3",
      name: "Shop-C",
      area: "Mumbai",
      category: "Baker",
      openingDate: "2022-02-13",
      closingDate: "2022-09-13",
    },
    {
      id: "4",
      name: "Shop-D",
      area: "Nashik",
      category: "Chemist",
      openingDate: "2022-01-13",
      closingDate: "2022-12-13",
    },
    {
      id: "6",
      name: "Shop-F",
      area: "Nashik",
      category: "Stationary",
      openingDate: "2022-04-13",
      closingDate: "2022-09-13",
    },
    {
      id: "5",
      name: "Shop-E",
      area: "Nagpur",
      category: "Stationary",
      openingDate: "2022-02-13",
      closingDate: "2022-08-13",
    },
  ];
  const [shoplist, setShoplist] = useState(data);

  return [shoplist, setShoplist];
};

export default useShopData;

import { useEffect, useState } from "react";

const useShopData = () => {
  const [shoplist, setShoplist] = useState([]);
  useEffect(() => {
    fetch("shoplist.json")
      .then((res) => res.json())
      .then((data) => setShoplist(data));
  }, []);

  return [shoplist, setShoplist];
};

export default useShopData;

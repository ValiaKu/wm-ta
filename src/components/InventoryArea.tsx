import { useState } from "react";

interface InventoryAreaProps {}

const INVENTIRY_ITEMS_URL = "https://dummyjson.com/products";

const InventoryArea: React.FC<InventoryAreaProps> = () => {
  // const { data } = useQuery("inventory", async () => {
  //   const response = await axios.get("https://dummyjson.com/products");
  //   return response.data;
  // });

  async function fetchInventoryItems() {
    const response = await fetch(INVENTIRY_ITEMS_URL);
    const jsonResponse = response.json();
    const inventoryItemsList = jsonResponse;
    console.log(inventoryItemsList);
    return inventoryItemsList;
  }

  return (
    <>
      <h2>Inventory</h2>
      <button onClick={fetchInventoryItems}>Get Items</button>
    </>
  );
};

export default InventoryArea;

import React, { useState, useEffect } from "react";
import axios from "axios";
import InventoryItem from "./components/InventoryItem.tsx";
import BasketItem from "./components/BasketItem.tsx";
import NewInventoryItem from "./components/NewInventoryItem.tsx";

import "./App.css";

// TODO: implement initialization useState from LocalStorage
const getInitialData = () => {
  const data = JSON.parse(localStorage.getItem("inventoryItems"));
  if (!data) return [];
  console.log("data", data);
  return data;
};

const App: React.FC = () => {
  interface ApiResponse {
    products: InventoryItem[];
  }

  interface InventoryItem {
    id: number;
    title: string;
  }

  interface BasketItem {
    id: number;
    title: string;
    quantity: number;
  }

  const [inventoryItems, setInventoryItems] = useState<InventoryItem[]>([]);
  const [basketItems, setBasketItems] = useState<BasketItem[]>([]);

  const INVENTORY_ITEMS_URL = "https://dummyjson.com/products?skip=5&limit=3";

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await axios.get<ApiResponse>(INVENTORY_ITEMS_URL);
        setInventoryItems(response.data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchInventory();
  }, []);

  useEffect(() => {
    console.log("data2", localStorage.inventoryItems);
    localStorage.setItem("inventoryItems", JSON.stringify(inventoryItems));
  }, [inventoryItems]);

  const handleAddToBasket = (item: { id: number; title: string }) => {
    const itemIndex = basketItems.findIndex(
      (basketItem) => basketItem.title === item.title
    );

    if (itemIndex !== -1) {
      const updatedBasket = [...basketItems];
      updatedBasket[itemIndex].quantity += 1;
      setBasketItems(updatedBasket);
    } else {
      setBasketItems([...basketItems, { ...item, quantity: 1 }]);
    }
  };

  const handleDeleteFromBasket = (item: { id: number }) => {
    const updatedBasket = basketItems.filter(
      (basketItem) => basketItem.id !== item.id
    );
    setBasketItems(updatedBasket);
  };

  const handleAddNewInventory = (item: { id: number; title: string }) => {
    setInventoryItems([...inventoryItems, { ...item, title: item.title }]);
  };

  return (
    <>
      <main className='container'>
        <section className='panel'>
          <header>
            <h2>Inventory</h2>
            {/* TODO: implement Add/New one item from list  <div className='control-panel'>
              <button className='button'>New</button>
              <button className='button'>Add</button>
            </div> */}
          </header>

          <ul className='items-list'>
            {inventoryItems &&
              inventoryItems.map((item) => (
                <InventoryItem
                  item={item}
                  key={item.id}
                  onAddToBasket={handleAddToBasket}
                />
              ))}
            <NewInventoryItem onAddNewInventory={handleAddNewInventory} />
          </ul>
        </section>
        <section className='panel'>
          <header>
            <h2>Basket</h2>
            {/* TODO: implement delete one item from list <div className='control-panel'>
              <button className='button'>Delete</button>
            </div> */}
          </header>

          <ul className='items-list'>
            {basketItems.map((item) => (
              <BasketItem
                key={item.id}
                item={item}
                onDeleteFromBasket={handleDeleteFromBasket}
              />
            ))}
          </ul>
          <p className='basket-total-amount'>
            Total:{" "}
            <span>
              {basketItems.reduce((total, item) => total + item.quantity, 0)}
            </span>
          </p>
        </section>
      </main>
      <footer>&copy; 2023 Valentyna Kuzmych</footer>
    </>
  );
};

export default App;

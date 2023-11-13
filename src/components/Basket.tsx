// components/Basket.tsx
import React from "react";
import BasketItem from "./BasketItem";
import ItemList from "./ItemList";

interface BasketProps {
  items: { id: number; title: string; quantity: number }[];
  onDeleteFromBasket: (item: { id: number }) => void;
}

const Basket: React.FC<BasketProps> = ({ items, onDeleteFromBasket }) => {
  return (
    <section className='panel'>
      <header>
        <h2>Basket</h2>
        {/* TODO: Implement delete one item from list */}
      </header>

      <ItemList items={items} onDeleteFromBasket={onDeleteFromBasket} />
      <p className='basket-total-amount'>
        Total:{" "}
        <span>{items.reduce((total, item) => total + item.quantity, 0)}</span>
      </p>
    </section>
  );
};

export default Basket;

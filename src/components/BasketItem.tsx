// src/components/BasketItem.tsx
import React from "react";

interface BasketItemProps {
  item: { id: number; title: string; quantity: number };
  onDeleteFromBasket: (item: { id: number; title: string }) => void;
}

const BasketItem: React.FC<BasketItemProps> = ({
  item,
  onDeleteFromBasket,
}) => {
  return (
    <li>
      <span>{item.title}</span>
      <div className='item-control-wrapper'>
        <span className='badge'>
          Count: <span>{item.quantity}</span>
        </span>
        <button
          className='button-icon blue'
          onClick={() => onDeleteFromBasket(item)}>
          ❌
        </button>
      </div>
    </li>
  );
};

export default BasketItem;

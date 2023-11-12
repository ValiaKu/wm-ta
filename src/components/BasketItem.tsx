import React from "react";

interface BasketItemProps {
  item: { id: string; title: string; quantity: number };
  onDeleteFromBasket: (item: { id: string; title: string }) => void;
}

const BasketItem: React.FC<BasketItemProps> = ({
  item,
  onDeleteFromBasket,
}) => {
  return (
    <div>
      <span>
        {item.title} - Quantity: {item.quantity}
      </span>
      <button onClick={() => onDeleteFromBasket(item)}>Delete</button>
    </div>
  );
};

export default BasketItem;

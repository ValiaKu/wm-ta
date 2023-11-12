import React from "react";

interface InventoryItemProps {
  item: { id: string; title: string };
  onAddToBasket: (item: { id: string; title: string }) => void;
}

const InventoryItem: React.FC<InventoryItemProps> = ({
  item,
  onAddToBasket,
}) => {
  return (
    <div>
      <span>{item.title}</span>
      <button onClick={() => onAddToBasket(item)}>Add</button>
    </div>
  );
};

export default InventoryItem;

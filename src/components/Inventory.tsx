// components/Inventory.tsx
import React from "react";
import InventoryItem from "./InventoryItem";
import NewInventoryForm from "./NewInventoryForm";
import ItemList from "./ItemList";

interface InventoryProps {
  items: { id: number; title: string }[];
  selectedItem: { id: number; title: string } | null;
  onSelectItem: (item: { id: number; title: string }) => void;
  onAddToBasket: (item: { id: number; title: string }) => void;
  onAddNewInventory: (item: { id: number; title: string }) => void;
  isAddNewItemOpen: boolean;
  onOpenNewInventory: (statusForm: boolean) => void;
}

const Inventory: React.FC<InventoryProps> = ({
  items,
  selectedItem,
  onSelectItem,
  onAddToBasket,
  onAddNewInventory,
  isAddNewItemOpen,
  onOpenNewInventory,
}) => {
  return (
    <section className='panel'>
      <header>
        <h2>Inventory</h2>
        <div className='control-panel'>
          <button
            className='button'
            onClick={() => onOpenNewInventory(!isAddNewItemOpen)}>
            New
          </button>
          <button
            className='button'
            onClick={() => onAddToBasket(selectedItem)}>
            Add to basket
          </button>
        </div>
      </header>

      <ItemList items={items} onSelectItem={onSelectItem} />
      {isAddNewItemOpen && (
        <NewInventoryForm onAddNewInventory={onAddNewInventory} />
      )}
    </section>
  );
};

export default Inventory;

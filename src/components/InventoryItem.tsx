interface InventoryItemProps {
  item: { id: number; title: string };
  onAddToBasket: (item: { id: number; title: string }) => void;
}

const InventoryItem: React.FC<InventoryItemProps> = ({
  item,
  onAddToBasket,
}) => {
  return (
    <li>
      <span>{item.title}</span>
      <button onClick={() => onAddToBasket(item)} className='button-icon'>
        ➕
      </button>
    </li>
  );
};

export default InventoryItem;

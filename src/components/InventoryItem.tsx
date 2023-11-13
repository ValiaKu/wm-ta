interface InventoryItemProps {
  item: { id: number; title: string };
  onSelectItem: (item: { id: number; title: string }) => void;
}

const InventoryItem: React.FC<InventoryItemProps> = ({
  item,
  onSelectItem,
}) => {
  return (
    <li>
      <span>{item.title}</span>
      <button onClick={() => onSelectItem(item)} className='button-icon'>
        ➕
      </button>
    </li>
  );
};

export default InventoryItem;

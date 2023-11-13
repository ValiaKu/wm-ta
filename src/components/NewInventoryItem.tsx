import { useState } from "react";

interface NewInventoryItemProps {
  onAddNewInventory: (item: { id: number; title: string }) => void;
}

const NewInventoryItem: React.FC<NewInventoryItemProps> = ({
  onAddNewInventory,
}) => {
  const [text, setText] = useState("");
  const handleChange = (evt: any) => {
    setText(evt.target.value);
  };

  return (
    <div className='user-control'>
      <input onChange={handleChange} value={text} />
      <button onClick={() => onAddNewInventory({ title: text, id: 45 })}>
        Add new item 🤓
      </button>
    </div>
  );
};

export default NewInventoryItem;

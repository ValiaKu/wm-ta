import { useState } from "react";

interface NewInventoryItemProps {
  item: { title: string; id: number };
  onAddNewInventory: (item: { title: string }) => void;
}

const NewInventoryItem: React.FC<NewInventoryItemProps> = ({
  onAddNewInventory,
}) => {
  const [text, setText] = useState("");
  const handleChange = (evt) => {
    setText(evt.target.value);
  };

  return (
    <div className='user-control'>
      <input onChange={handleChange} value={text} />
      <button
        onClick={() =>
          onAddNewInventory({ title: text, id: crypto.randomUUID() })
        }>
        Add new item 🤓
      </button>
    </div>
  );
};

export default NewInventoryItem;

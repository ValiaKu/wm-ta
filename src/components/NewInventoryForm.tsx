import React from "react";

interface NewInventoryFormProps {
  onAddNewInventory: (item: { id: number; title: string }) => void;
}

const NewInventoryForm: React.FC<NewInventoryFormProps> = ({
  onAddNewInventory,
}) => {
  // Implement your form logic here

  return <div>{/* Your form JSX */}</div>;
};

export default NewInventoryForm;

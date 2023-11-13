// components/ControlPanel.tsx
import React from "react";

interface ControlPanelProps {
  onNewButtonClick: () => void;
  onAddButtonClick: () => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({
  onNewButtonClick,
  onAddButtonClick,
}) => {
  return (
    <div className='control-panel'>
      <button className='button' onClick={onNewButtonClick}>
        New
      </button>
      <button className='button' onClick={onAddButtonClick}>
        Add
      </button>
    </div>
  );
};

export default ControlPanel;

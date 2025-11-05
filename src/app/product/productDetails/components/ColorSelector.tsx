import React from "react";
import ColorCircle from "../../../../components/ColorCircle";

interface Props {
  options: string[];
  selected?: string | null;
  onSelect: (colour: string) => void;
}

const ColorSelector: React.FC<Props> = ({ options, selected, onSelect }) => {
  return (
    <>
      {options.map((color) => (
        <div key={color}>
          <ColorCircle colour={color} selected={selected === color} onClick={() => onSelect(color)} />
        </div>
      ))}
    </>
  );
};

export default ColorSelector;

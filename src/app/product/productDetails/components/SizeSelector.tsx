import React from "react";

interface Props {
  options: string[];
  selected?: string | null;
  onSelect: (size: string) => void;
}

const SizeSelector: React.FC<Props> = ({ options, selected, onSelect }) => {
  return (
    <div className="mt-4">
      <p className="text-2xl font-bold mb-5">Choose a Size</p>
      <div className="flex flex-wrap gap-2">
        {options.map((size) => (
          <button
            key={size}
            onClick={() => onSelect(size)}
            className={`px-4 py-2 rounded-xl border transition ${selected === size ? "bg-black text-white border-black" : "border-gray-300 text-gray-800 hover:border-black"}`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;

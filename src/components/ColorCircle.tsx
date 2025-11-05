import React from "react";

interface ColorCircleProps {
	colour: string;
	selected?: boolean;
	onClick?: () => void;
}

const ColorCircle: React.FC<ColorCircleProps> = ({ colour, selected = false, onClick }) => {
	return (
		<button
			type="button"
			onClick={onClick}
			aria-pressed={selected}
			className={`w-8 h-8 rounded-full mr-2 border transition-focus focus:outline-none flex-shrink-0
        ${selected ? "border-black ring-2 ring-black/40" : "border-gray-300"}`}
			style={{ backgroundColor: colour.toLowerCase() }}
		/>
	);
};

export default ColorCircle;


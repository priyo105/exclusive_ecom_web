import React from "react";

interface Props {
  price: number;
  discountedPrice?: number;
}

const PriceDisplay: React.FC<Props> = ({ price, discountedPrice }) => {
  return (
    <div className="mt-4">
      {discountedPrice ? (
        <div>
          <p className="text-2xl font-bold flex items-baseline gap-3">
            <span className="text-gray-400 line-through text-lg">£ {price.toFixed(2)}</span>
            <span className="text-2xl font-extrabold">£ {discountedPrice.toFixed(2)}</span>
            <span className="text-gray-500 text-sm font-normal">or £ {(discountedPrice / 6).toFixed(2)}/month</span>
          </p>
          <p className="text-sm text-gray-500 mt-1">Suggested payments with 6 months special financing</p>
        </div>
      ) : (
        <div>
          <p className="text-2xl font-bold">
            £ {price} <span className="text-gray-500 text-base font-normal ">or  £ {(price / 6).toFixed(2)}/month</span>
          </p>
          <p className="text-sm text-gray-500 mt-1">Suggested payments with 6 months special financing</p>
        </div>
      )}
    </div>
  );
};

export default PriceDisplay;

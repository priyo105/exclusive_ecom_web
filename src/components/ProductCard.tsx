"use client";
import React from 'react';
import { Product } from '../types/Products';
import { FaHeart, FaStar } from 'react-icons/fa';
import { imageUrls } from '../apis/endpoints';
import { useDispatch } from 'react-redux';
import { setSelectedProduct } from '../store/slices/ProductSlice';
import Link from 'next/link';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const dispatch = useDispatch();

    const handleProductClick = () => {
        dispatch(setSelectedProduct(product));
    };

    const handleWishlistClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
    };

    return (
        <Link
            href={`/product/productDetails?productId=${product._id}`}
            className="block"
            onClick={handleProductClick}
        >
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden w-full max-w-sm flex flex-col hover:shadow-lg transition-all duration-200 group transform hover:scale-110 cursor-pointer">
                <div className="relative bg-gray-100 h-48 flex items-center justify-center">
                    <img
                        src={imageUrls + "/uploads/" + product.images[0].url}
                        alt={product.name}
                        className="w-full h-40 object-contain"
                    />
                    <button 
                        className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md border border-gray-200 hover:bg-gray-100 transition-all"
                        onClick={handleWishlistClick}
                    >
                        <FaHeart className="text-gray-400 w-5 h-5 group-hover:text-black-500" />
                    </button>
                </div>
                <div className="p-4 flex flex-col gap-2 flex-1">
                    <div className="flex items-center justify-between">
                        <span className="font-bold text-base md:text-md text-gray-900 truncate">{product.name}</span>
                        <span className="font-extrabold text-gray-900 text-base md:text-md">${product.price}</span>
                    </div>
                    {product.description && (
                        <div className="text-gray-500 text-xs md:text-xs mb-1 truncate">{product.description}</div>
                    )}
                    <div className="flex items-center gap-1 mt-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <FaStar
                                key={i}
                                className={
                                    i < Math.round(product.ratings.count ?? 0)
                                        ? 'text-black-600'
                                        : 'text-gray-300'
                                }
                            />
                        ))}
                        <span className="ml-1 text-xs text-gray-600">({product.ratings.count ?? 0})</span>
                    </div>
                    <button 
                        className="mt-3 bg-white border border-gray-300 hover:bg-black hover:text-white text-black font-semibold py-2 rounded-full transition-all w-full shadow-sm"
                        onClick={handleAddToCart}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
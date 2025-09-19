"use client"
import { getTopRatedProdcuts } from '../../apis/home';
import ProductCard from '../../components/ProductCard';
import { Product, TopRatedProduct } from '../../types/Products';
import React, { useEffect, useState } from 'react'

export default function TopRatedProducts() {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        getTopRatedProdcuts().then((response) => {
            setProducts(response.products);
        });
    }, []);
    return (
        <div className="w-full flex flex-col items-center mb-10">
            {/* Header row for mobile */}
            <div className="flex md:hidden items-center justify-between mt-10 w-full px-4">
                <h2 className="text-md font-bold">Top Rated Products</h2>
                <a href="#" className="text-black text-sm font-bold">See all</a>
            </div>
            {/* Header row for desktop */}
            <div className="hidden md:flex items-center justify-between w-full max-w-7xl px-4 mt-20">
                <h2 className="text-2xl font-bold">Top Rated Products</h2>
                <a href="#" className="text-black font-bold ">See all</a>
            </div>
            {/* Horizontal scroll for mobile view*/}
            <div className="flex md:hidden overflow-x-auto gap-4 mt-8 w-full px-4 no-scrollbar">
                {products.map((product) => (
                   <div key={product._id} className="flex-shrink-0 w-64 max-w-xs">
                     <ProductCard product={product} />
                   </div>
                ))}
            </div>
            {/* Grid for md and above */}
            <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 w-full max-w-7xl px-4">
                {products.map((product) => (
                   <ProductCard key={product._id} product={product} />
                ))}
            </div>

        </div>
    )
}

"use client";
import CategoryBox from '../../components/CategoryBox';
import MobileCategoryBox from '../../components/MobileCategoryBox';
import { getCategories } from '../../apis/home';
import { Category } from '../../types/Category';
import React, { useEffect, useState } from 'react'

export default function CategoriesList() {
    const [categories, setCategories] = useState<Category[] | null>([]);

    useEffect(() => {
        getCategories().then(setCategories);
    }, []);

    return (

        <div className="w-full flex flex-col items-center mb-10">
            {/* Header row for mobile */}
            <div className="flex md:hidden items-center justify-between mt-20 w-full px-4">
                <h2 className="text-md font-bold">Shop by Categories</h2>
                <a href="#" className="text-black text-sm font-bold">See all</a>
            </div>

            {/* Header row for desktop */}
            <div className="hidden md:flex items-center justify-between w-full max-w-7xl px-4 mt-20">
                <h2 className="text-2xl font-bold">Shop by Categories</h2>
                <a href="#" className="text-black font-bold ">See all</a>
            </div>

            {/* Desktop grid */}
            <div
                className="
                    hidden md:grid md:grid-cols-3 lg:grid-cols-6 
                    gap-6 justify-items-center mt-10 w-full max-w-7xl px-4
                "
            >
                {categories?.map((category) =>
                    !category.isSubCategories ? (
                        <div
                            key={category._id + '-desktop'}
                            className="cursor-pointer w-full"
                        >
                            <CategoryBox category={category} />
                        </div>
                    ) : null
                )}
            </div>
            {/* Mobile horizontal scroll */}
            <div
                className="flex md:hidden overflow-x-auto space-x-4 mt-10 w-full px-4 no-scrollbar"
            >
                {categories?.map((category) =>
                    !category.isSubCategories ? (
                        <div
                            key={category._id + '-mobile'}
                            className="cursor-pointer flex-shrink-0 w-40"
                        >
                            <MobileCategoryBox  category={category}/>
                        </div>
                    ) : null
                )}
            </div>
        </div>
    )
}

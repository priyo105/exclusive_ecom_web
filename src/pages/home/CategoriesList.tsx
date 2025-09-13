"use client";
import CategoryBox from '../../components/CategoryBox';
import { getCategories } from '../../apis/home';
import { Category } from '@/types/Category';
import React, { useEffect, useState } from 'react'

export default function CategoriesList() {
    const [categories, setCategories] = useState<Category[] | null>([]);

    useEffect(() => {
        getCategories().then(setCategories);
    }, []);

    return (
        <div className="w-full flex flex-col items-center">
            <h2 className="text-2xl font-bold text-center mt-20">
                Shop by Categories
            </h2>

            <div
                className="
                    grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 
                    gap-6 justify-items-center mt-10 w-full max-w-7xl px-4
                "
            >
                {categories?.map((category) =>
                    !category.isSubCategories ? (
                        <div
                            key={category._id}
                            className="cursor-pointer"
                        >
                            <CategoryBox category={category} />
                        </div>
                    ) : null
                )}
            </div>
        </div>
    )
}

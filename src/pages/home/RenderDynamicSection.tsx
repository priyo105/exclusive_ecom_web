"use client";
import React, { useEffect, useState } from 'react';
import { getHomeSections } from '../../apis/home';
import ProductCard from '../../components/ProductCard';
import { useRouter } from 'next/navigation';
import { HomeSection } from '../../types/HomeSection';

export default function RenderDynamicSection() {
  const [sections, setSections] = useState<HomeSection[]>([]);
  const router = useRouter();

  useEffect(() => {
    async function fetchSections() {
      try {
        const data = await getHomeSections();
        setSections(data);
      } catch (error) {
        // handle error if needed
      }
    }
    fetchSections();
  }, []);

  return (
    <div>
      {sections.map((section) => (
        <div key={section._id} className="w-full flex flex-col items-center mb-10">
          {/* Header row for mobile */}
          <div className="flex md:hidden items-center justify-between mt-10 w-full px-4">
            <h2 className="text-md font-bold">{section.title}</h2>
            <button
              onClick={() => router.push(`/products?sectionId=${section._id}&comingFrom=${encodeURIComponent(section.title)}`)}
              className="text-black text-sm font-bold"
            >
              See all
            </button>
          </div>
          {/* Header row for desktop */}
          <div className="hidden md:flex items-center justify-between w-full max-w-7xl px-4 mt-20">
            <h2 className="text-2xl font-bold">{section.title}</h2>
            <button
              onClick={() => router.push(`/products?sectionId=${section._id}&comingFrom=${encodeURIComponent(section.title)}`)}
              className="text-black font-bold "
            >
              See all
            </button>
          </div>
          {/* Horizontal scroll for mobile view*/}
          <div className="flex md:hidden overflow-x-auto gap-4 mt-8 w-full px-4 no-scrollbar">
            {section.products.map((product) => (
              <div key={product._id} className="flex-shrink-0 w-64 max-w-xs">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          {/* Grid for md and above */}
          <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 w-full max-w-7xl px-4">
            {section.products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

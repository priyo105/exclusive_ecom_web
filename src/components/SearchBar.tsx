"use client";
import React, { useEffect, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { searchProductsByKeyword } from "../apis/product";
import { SearchResponse } from "../types/SearchResponse";
import { imageUrls } from '../apis/endpoints';
import { useRouter } from "next/navigation";

export default function SearchBar({ className = "" }: { className?: string }) {
    const [showSearch, setShowSearch] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [results, setResults] = useState<SearchResponse>();
    const [loading, setLoading] = useState(false);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const router = useRouter();

    const handleSuggestionClick = (text: string) => {
        setSearchQuery(text);
        setShowSearch(true);
        inputRef.current?.focus();
    };

    // Debounced search effect
    useEffect(() => {
        if (!searchQuery.trim()) {
            setResults(undefined);
            setLoading(false);
            return;
        }

        setLoading(true);
        const id = window.setTimeout(() => {
            searchProductsByKeyword(searchQuery)
                .then((res) => {
                    console.log("Search results:", res);
                    setResults(res ?? []);
                })
                .finally(() => setLoading(false));
        }, 300);

        return () => {
            clearTimeout(id);
        };
    }, [searchQuery]);

    // navigate to product details with productId query param
    const handleResultClick = (productId: string) => {
        setShowSearch(false);
        router.push(`/product/productDetails?productId=${encodeURIComponent(productId)}`);
    };

    return (
        // no global DOM listeners — rely on onBlur/onKeyDown
        <div
            className={`relative w-full md:w-auto ${className}`}
            onBlur={(e: React.FocusEvent<HTMLDivElement>) => {
                const related = e.relatedTarget as Node | null;
                if (!related || !e.currentTarget.contains(related)) {
                    setShowSearch(false);
                }
            }}
        >
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                <FiSearch className="w-5 h-5" />
            </span>

            <input
                ref={inputRef}
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowSearch(true)}
                onKeyDown={(e) => {
                    if (e.key === "Escape") setShowSearch(false);
                }}
                aria-expanded={showSearch}
                aria-controls="search-modal"
                // elevated off-white input: subtle background, clearer border, lift on hover/focus
                className="pl-10 pr-4 py-2 w-full md:w-64 rounded-full bg-[#fbfbf9] border border-gray-300 text-sm transition-transform transition-shadow duration-150 outline-none hover:-translate-y-[0.5px] hover:shadow-md focus:translate-y-0 focus:shadow-xl focus:ring-2 focus:ring-gray-200"
            />

            {showSearch && (
                <div id="search-modal" className="fixed left-0 right-0 top-16 z-50">
                    <div className="max-w-7xl mx-auto px-6">
                        {/* elevated off-white panel with stronger shadow and padding */}
                        <div className="bg-[#fbfbf9] rounded-xl shadow-2xl p-6 border border-gray-200 ring-1 ring-gray-100">
                            {searchQuery ? (
                                <div>
                                    <p className="text-sm text-gray-500 mb-2">
                                        Searching results for{" "}
                                        <span className="font-semibold">{searchQuery}</span>
                                    </p>
                                    {
                                        (results?.results?.products ?? []).map((product) => (
                                            <div
                                                key={product._id}
                                                role="button"
                                                tabIndex={0}
                                                onClick={() => handleResultClick(product._id)}
                                                onKeyDown={(e) => { if (e.key === "Enter") handleResultClick(product._id); }}
                                                className="flex p-3 border-b last:border-b-0 hover:bg-gray-50 cursor-pointer rounded-md"
                                            >
                                                <img
                                                    src={imageUrls + "/uploads/" + (product.images?.[0]?.url ?? "")}
                                                    alt={product.name}
                                                    className="w-12 h-12 object-contain mr-4"
                                                />
                                                <p className="text-gray-800">{product.name}</p>
                                            </div>
                                        ))
                                    }

                                </div>
                            ) : (
                                <div>
                                    <p className="text-sm text-gray-500 mb-2">Popular searches</p>
                                    <div className="flex flex-wrap gap-2">
                                        <button
                                            type="button"
                                            onClick={() => handleSuggestionClick("Headphones")}
                                            className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm shadow-sm hover:shadow"
                                        >
                                            Headphones
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => handleSuggestionClick("Sneakers")}
                                            className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm shadow-sm hover:shadow"
                                        >
                                            Sneakers
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => handleSuggestionClick("Watches")}
                                            className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm shadow-sm hover:shadow"
                                        >
                                            Watches
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

"use client";
import React, { useEffect, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function SearchBar({ className = "" }: { className?: string }) {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSuggestionClick = (text: string) => {
    setSearchQuery(text);
    setShowSearch(true);
    inputRef.current?.focus();
  };


  //foucs or Defocus search bar logic
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(e.target as Node)) {
        setShowSearch(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setShowSearch(false);
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div className={`relative w-[full] md:w-auto ${className}`} ref={wrapperRef}>
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
        aria-expanded={showSearch}
        aria-controls="search-modal"
        className="pl-10 pr-4 py-2 w-full md:w-64 rounded-full bg-[#f3e8ff] focus:bg-white focus:ring-2 focus:ring-indigo-300 border border-gray-200 text-sm transition-all outline-none shadow-sm"
      />

      {/* Search modal (full-width fixed panel below header) */}
      {showSearch && (
        <div id="search-modal" className="fixed left-0 right-0 top-16 z-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-white rounded-lg shadow-lg p-4 border border-gray-200">
              {searchQuery ? (
                <div>
                  <p className="text-sm text-gray-500 mb-2">
                    Searching results for <span className="font-semibold">{searchQuery}</span>
                  </p>
                  {/* Replace below with live results */}
                  <ul className="divide-y">
                    <li className="py-2">Result item matching <span className="font-medium">{searchQuery}</span></li>
                    <li className="py-2">Another result for <span className="font-medium">{searchQuery}</span></li>
                  </ul>
                </div>
              ) : (
                <div>
                  <p className="text-sm text-gray-500 mb-2">Popular searches</p>
                  <div className="flex flex-wrap gap-2">
                    <button type="button" onClick={() => handleSuggestionClick("Headphones")} className="px-3 py-1 bg-gray-100 rounded-full text-sm">Headphones</button>
                    <button type="button" onClick={() => handleSuggestionClick("Sneakers")} className="px-3 py-1 bg-gray-100 rounded-full text-sm">Sneakers</button>
                    <button type="button" onClick={() => handleSuggestionClick("Watches")} className="px-3 py-1 bg-gray-100 rounded-full text-sm">Watches</button>
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

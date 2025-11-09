"use client";
import Link from 'next/link';
import React, { useState } from 'react'
import { FiShoppingCart, FiChevronDown, FiMenu } from 'react-icons/fi'
import SearchBar from "./SearchBar";

export default function Header() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<header className="bg-[#e0d9ff] shadow sticky top-0 z-50 w-full backdrop-blur-sm">
			<nav className="relative container mx-auto flex flex-col md:flex-row items-center justify-between py-3 px-2 md:py-4 md:px-6 gap-3 md:gap-0">
				{/* Logo and Hamburger */}
				<div className="relative flex items-center w-full lg:w-auto justify-center lg:justify-start">
					<button className="lg:hidden p-2 absolute left-0" onClick={() => setMenuOpen(!menuOpen)}>
						<FiMenu className="w-7 h-7 text-black" />
					</button>
					<Link href="/" className="text-black no-underline">
						<div className="flex items-center space-x-3 mx-auto">
							<img src="/shopping-bags.png" alt="Site Logo" className="h-8 w-8 object-contain" />
							<span className="text-xl font-bold mt-2">Blue Market</span>
						</div>
					</Link>
					<a href="#cart" className="block lg:hidden absolute right-0 p-2 text-gray-700 hover:text-black">
						<FiShoppingCart className="w-6 h-6 text-black" />
					</a>
				</div>

				{/* Navigation Links - Desktop */}
				<div className="hidden lg:flex items-center space-x-4 md:space-x-6 w-full md:w-auto justify-center md:justify-start">
					<a href="#categories" className="text-black hover:text-gray-600 font-bold flex items-center">
						Shops
					</a>
				</div>
				<div className="hidden lg:flex items-center space-x-4 md:space-x-6 w-full md:w-auto justify-center md:justify-start">
					<a href="#categories" className="text-black hover:text-gray-600 font-bold flex items-center">
						Categories <FiChevronDown className="ml-1 w-4 h-4" />
					</a>
					<a href="#deals" className="text-black hover:text-black font-bold">Deals</a>
					<a href="#deals" className="text-black hover:text-black font-bold">Whats new ?</a>
				</div>

				{/* Search, Account, Cart */}
				<div className="flex items-center space-x-2 md:space-x-4 w-full md:w-auto justify-center md:justify-end">
					<SearchBar />
					<a href="#account" className="text-gray-700 hover:text-black">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
							<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 1115 0v.75a.75.75 0 01-.75.75h-13.5a.75.75 0 01-.75-.75v-.75z" />
						</svg>
					</a>
					<a href="#cart" className="hidden lg:block text-gray-700 hover:text-black">
						<FiShoppingCart className="w-6 h-6 text-black" />
					</a>
				</div>

				{/* Mobile Dropdown Menu */}
				{menuOpen && (
					<div className="absolute top-full left-0 right-0 z-50 flex flex-col lg:hidden bg-white rounded-b-lg shadow mt-0 p-4 space-y-3 animate-fade-in w-full">
						<a href="#categories" className="text-black hover:text-gray-600 font-bold flex items-center">
							Shops
						</a>
						<a href="#categories" className="text-black hover:text-gray-600 font-bold flex items-center">
							Categories <FiChevronDown className="ml-1 w-4 h-4" />
						</a>
						<a href="#deals" className="text-black hover:text-black font-bold">Deals</a>
						<a href="#deals" className="text-black hover:text-black font-bold">Whats new ?</a>
					</div>
				)}
			</nav>
		</header>
	)
}

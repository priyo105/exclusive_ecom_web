"use client";
import React, { useEffect, useState } from 'react';
import { getVerifiedVendors } from '../../apis/vendors';
import { Vendor } from '../../types/Vendor';
import { imageUrls } from '../../apis/endpoints';

export default function RenderVendors() {
  const [vendors, setVendors] = useState<Vendor[]>([]);

  useEffect(() => {
    async function fetchVendors() {
      try {
        const data = await getVerifiedVendors();
        setVendors(data);
      } catch (error) {
        // handle error if needed
      }
    }
    fetchVendors();
  }, []);

  return (
    <div className="w-full flex flex-col items-center mb-10">
      {/* Header row for mobile */}
      <div className="flex md:hidden items-center justify-between mt-10 w-full px-4">
        <h2 className="text-md font-bold">Verified Vendors</h2>
      </div>
      {/* Header row for desktop */}
      <div className="hidden md:flex items-center justify-between w-full max-w-7xl px-4 mt-20">
        <h2 className="text-2xl font-bold">Verified Vendors</h2>
      </div>
      {/* Horizontal scroll for mobile */}
      <div className="flex md:hidden overflow-x-auto gap-4 mt-8 w-full px-4 no-scrollbar">
        {vendors.map((vendor) => (
          <div key={vendor._id} className="flex-shrink-0 w-56 max-w-xs bg-white rounded-xl border border-gray-200 p-4 flex flex-col items-center text-center">
            {vendor.logoUrl && (
              <img src={vendor.logoUrl} alt={vendor.name} className="h-16 w-16 object-cover mb-2 rounded-full bg-gray-100" />
            )}
            <div className="font-semibold text-gray-900 text-base mb-1">{vendor.name}</div>
            <div className="text-gray-500 text-xs break-all">{vendor.email}</div>
          </div>
        ))}
      </div>
      {/* Grid for md and above */}
      <div className="hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 w-full max-w-7xl px-4">
        {vendors.map((vendor) => (
          <div key={vendor._id} className="bg-white rounded-xl border border-gray-200 p-4 flex flex-col items-center text-center">
            {vendor.logoUrl && (
              <img src={imageUrls+"/uploads/"+vendor.logoUrl} alt={vendor.name} className="h-16 w-16 object-cover mb-2 rounded-full bg-gray-100" />
            )}
            <div className="font-semibold text-gray-900 text-base mb-1">{vendor.name}</div>
            <div className="text-gray-500 text-xs break-all">{vendor.email}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

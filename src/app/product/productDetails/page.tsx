"use client";

import { FaStar } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import Header from "../../../components/Header";
import { useState, useEffect } from "react";
import { imageUrls } from "../../../apis/endpoints";
import Footer from "../../../components/Footer";
import { getProductInfo } from "../../../apis/productinfo";
import { ProductInfo } from "../../../types/ProductInfo";
import ProductImages from "./components/ProductImages";
import PriceDisplay from "./components/PriceDisplay";
import ColorSelector from "./components/ColorSelector";
import SizeSelector from "./components/SizeSelector";
import { Product } from "../../../types/Product";
import ProductDetailsInfo from "./components/ProductDetailsInfo";

type ProductImage = { url: string };
type VariantCombination = { options?: string[]; images?: (string | ProductImage)[] };

export default function ProductDetails() {
  const product = useSelector((state: RootState) => state.product.selectedProduct) as Product | null;
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [images, setImages] = useState<string[]>([]);
  const [productinfos, setProductInfos] = useState<ProductInfo | undefined>();

  // Normalize incoming image entries to plain non-empty strings.
  const normalizeImages = (arr: any[] | undefined): string[] => {
    if (!Array.isArray(arr)) return [];
    return arr
      .map((it) => {
        if (!it) return null;
        if (typeof it === "string") return it.trim() || null;
        if (typeof it === "object" && (it as ProductImage).url) return String((it as ProductImage).url).trim() || null;
        return null;
      })
      .filter(Boolean) as string[];
  };

  // initialize images from product.images when product is available
  useEffect(() => {
    if (product?.images) {
      const initial = normalizeImages(product.images);
      setImages(initial);
      if (initial.length) setSelectedImage(initial[0]);
    }
  }, [product]);

  //load product infos
  useEffect(() => {
    getProductInfo(product?._id || "").then((data) => {
      setProductInfos(data);
    });
  }, [product]);

  if (!product) {
    return <p className="p-6 text-gray-500">No product selected</p>;
  }

  const sizeVariant = product.variantOptions.find(option => option.name.toLowerCase() === "size");
  const colorVariant = product.variantOptions.find(option => option.name.toLowerCase() === "color");

  // typed helper to find images for a selected color
  const getImagesByColor = (variantCombinations: VariantCombination[] | undefined, color: string): void => {
    if (!variantCombinations || variantCombinations.length === 0) {
      // fall back to product default images
      const defaults = normalizeImages(product?.images);
      setImages(defaults);
      setSelectedImage(defaults[0] ?? null);
      return;
    }

    const matchedVariant = variantCombinations.find((variant) =>
      (variant?.options ?? []).includes(color)
    );

    const imgs = normalizeImages(matchedVariant?.images);
    setImages(imgs);
    setSelectedImage(imgs.length ? imgs[0] : null);
  };

  return (
    <div className="bg-white">
      <Header />
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-10 lg:mt-20">
        {/* Left: Images */}
        <ProductImages
          images={images}
          imageBase={imageUrls}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          productName={product.name}
          productId={product._id}
        />

        {/* Right: Details */}
        <div className="md:ml-20">
          <h1 className="text-2xl md:text-4xl font-bold">{product.name}</h1>
          <p className="text-gray-800 mt-5 mb-5 text-sm font-sans">{product.description}</p>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-3z">
            {Array.from({ length: Math.max(0, Math.floor(product.ratings?.average ?? 0)) }).map((_, i) => (
              <FaStar key={i} className="text-green-950 size-3.5" />
            ))}
            <span className="ml-2 text-gray-800 font-bold text-sm">
              ({product.ratings?.count || 0})
            </span>
          </div>
          <hr className="border-gray-300 mt-5 mb-5  border-t-[2px]" />

          {/* Price */}
          <PriceDisplay price={product.price} discountedPrice={product.discountedPrice} />

          {/* Size */}
          {sizeVariant && (
            <>
              <hr className="border-gray-300 mt-5 mb-5  border-t-[2px]" />
              <SizeSelector
                options={sizeVariant.options}
                selected={selectedSize}
                onSelect={(s) => setSelectedSize(s)}
              />
            </>
          )}

          <hr className="border-gray-300 mt-5 mb-5  border-t-[2px]" />

          {/* Color */}
          <div className="mt-4">
            <p className="text-2xl font-bold">Choose a Color</p>
            {colorVariant && (
              <div className="flex flex-row gap-4 mt-4">
                <ColorSelector
                  options={colorVariant.options}
                  selected={selectedColor}
                  onSelect={(c) => {
                    setSelectedColor(c);
                    getImagesByColor(product.variantCombinations, c);
                  }}
                />
              </div>
            )}
          </div>

          <hr className="border-gray-300 mt-5 mb-5  border-t-[2px]" />

          {/* Quantity */}
          <div className="mt-6 flex items-center gap-4 bg-gray">
            <div className="bg-[#f6f7f7] w-40 inline-flex justify-center items-center rounded-2xl">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-6 py-3 font-bold text-3xl">-</button>
              <span className="font-extrabold">{quantity}</span>
              <button className="px-6 py-3 font-bold text-3xl" onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>

            <span className="text-black ml-3">
              Only <span className="text-orange-500 font-semibold">{product.stock} Items</span> Left! <br /> Don’t miss it
            </span>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <button className="px-6 py-3 w-50 border bg-black text-white rounded-lg hover:bg-gray-100">Add to Cart</button>
          </div>

          {/* Delivery Info */}
          <div className="mt-8 border-1 pt-4 text-sm text-gray-600">
            <div className="flex ml-4">
              <img src={"/delivery-truck.png"} alt="Delivery Icon" className="w-7 h-7 mr-2" />
              <div>
                <p className="flex items-center text-md font-bold text-black">Free Delivery</p>
                <p className="cursor-pointer">For the premium subscribers only</p>
              </div>
            </div>
            <div className="mt-8 border-1 p-4 text-sm text-gray-600">
              <div className="flex">
                <img src={"/product-return.png"} alt="Delivery Icon" className="w-7 h-7 mr-2" />
                <div>
                  <p className="flex items-center text-md font-bold text-black">Return Delivery</p>
                  <p className="cursor-pointer">Free 30 days Delivery Returns. Details</p>

                </div>
              </div>
            </div>
          </div>
        </div>
        <ProductDetailsInfo />
      </div>

      {/* Mobile fixed Add to Cart bar */}
      <div className="fixed bottom-0 left-0 w-full p-4 z-50 md:hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-3">
            <button className="flex-1 bg-black text-white rounded-lg py-3 text-center font-medium hover:bg-gray-100">Add to Cart</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

import React from "react";

interface Props {
  images: string[];
  imageBase: string;
  selectedImage: string | null;
  setSelectedImage: (img: string | null) => void;
  isModalOpen: boolean;
  setIsModalOpen: (v: boolean) => void;
  productName?: string;
  productId?: string;
}

const ProductImages: React.FC<Props> = ({ images, imageBase, selectedImage, setSelectedImage, isModalOpen, setIsModalOpen, productName }) => {
  const main = selectedImage || images[0] || "";

  return (
    <div>
      <img
        key={main || "main"}
        src={imageBase + "/uploads/" + main}
        alt={productName || "product"}
        className="rounded-xl w-full object-cover border-black-400 border-2 p-10 cursor-pointer hover:opacity-90 transition"
        onClick={() => setIsModalOpen(true)}
      />

      <div className="flex gap-3 mt-4">
        {images.length > 0 &&
          images.map((img) => (
            <img
              key={img}
              src={imageBase + "/uploads/" + img}
              alt="thumbnail"
              onClick={() => setSelectedImage(img)}
              className={`md:w-35 w-20 h-20 md:h-35 rounded-lg border-2 p-2 cursor-pointer hover:border-green-500 ${selectedImage === img ? "border-green-600" : "border-gray-300"}`}
            />
          ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">
          <div className="relative max-w-4xl w-full mx-4 bg-white rounded-xl p-6">
            <button className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-black" onClick={() => setIsModalOpen(false)}>✕</button>
            <img src={imageBase + "/uploads/" + main} alt="Enlarged product" className="w-full h-[500px] object-contain rounded-lg" />

            <div className="flex gap-3 mt-6 justify-center">
              {images.map((img) => (
                <img
                  key={img}
                  src={imageBase + "/uploads/" + img}
                  alt="thumbnail"
                  onClick={() => setSelectedImage(img)}
                  className={`w-20 h-20 rounded-lg border-2 p-2 cursor-pointer hover:border-green-500 ${selectedImage === img ? "border-green-600" : "border-gray-300"}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductImages;

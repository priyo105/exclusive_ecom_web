"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { getBanners } from "../../apis/home";
import { Banner } from "../../types/Banner";
import { imageUrls } from "@/apis/endpoints";

export default function BannerPage() {
  const [banners, setBanners] = useState<Banner[] | null>(null);

  useEffect(() => {
    getBanners().then(setBanners);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="w-full flex justify-center">
      {banners ? (
        <div className="lg:w-4/5 w-full"> {/* control overall slider width */}
          <Slider {...settings}>
            {banners.map((banner) => (
              <div
                key={banner._id}
                className="mt-5"
              >
                <img
                  src={imageUrls + banner.imageUrl}
                  alt={banner.title}
                  className="rounded-xl xl:h-[600px] lg:h-[400px] h-[200px]"
                  style={{
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            ))}
          </Slider>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

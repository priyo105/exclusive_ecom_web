"use client";

import BannerPage from './banner/index';
import Header from '../components/Header';
import CategoriesList from './home/CategoriesList';
import TopRatedProducts from './home/TopRatedProducts';
import RenderDynamicSection from './home/RenderDynamicSection';
import Footer from '../components/Footer';
import RenderVendors from './home/RenderVendors';
export default function Home() {
  return (
    <div className='bg-white' >
         <Header />
          <BannerPage />
          <CategoriesList />
          <TopRatedProducts />
          <RenderVendors />
          <RenderDynamicSection />
          <Footer />
    </div>
  );
}

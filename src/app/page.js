import BannerPage from '../pages/banner/index';
import Header from '../components/Header';
import CategoriesList from '../pages/home/CategoriesList';
import TopRatedProducts from '../pages/home/TopRatedProducts';
import RenderDynamicSection from '../pages/home/RenderDynamicSection';
import Footer from '../components/Footer';
import RenderVendors from '../pages/home/RenderVendors';
export default function Home() {
  return (
    <div >
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

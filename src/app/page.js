import BannerPage from '../pages/banner/index';
import Header from '../components/Header';
import CategoriesList from '../pages/home/CategoriesList';
import TopRatedProducts from '../pages/home/TopRatedProducts';
import RenderDynamicSection from '../pages/home/RenderDynamicSection';
import Footer from '../components/Footer';
export default function Home() {
  return (
    <div >
         <Header />
          <BannerPage />
          <CategoriesList />
          <TopRatedProducts />
          <RenderDynamicSection />
          <Footer />
    </div>
  );
}

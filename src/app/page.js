
import BannerPage from '../pages/banner'
import Header from '../components/Header';
import CategoriesList from '../pages/home/CategoriesList';
export default function Home() {
  return (
    <div >
         <Header />
          <BannerPage />
          <CategoriesList />
    </div>
  );
}

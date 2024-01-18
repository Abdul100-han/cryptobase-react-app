import Destinations from './components/Destinations/Destinations';
import Hero from './components/Hero/Hero';
import Nvavbar from './components/Navbar/Navbar';
import ImgCarousel from './components/carousel/ImgCarousel';
import Footer from './components/footer/Footer';
import Search from './components/search/Search';
import Select from './components/select/Select';
import './index.css'

function App() {
  
  return (
   <div>
      <Nvavbar />
      <Hero />
      <Destinations />
      <Search />
      <Select />
      <ImgCarousel />
      <Footer />
    
   </div>
  );
}

export default App;

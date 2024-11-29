import './App.css';
import Carousel from './Components/Carousel/Carousel';
import Categories from './Components/Categories/Categories';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import AllItems from './Components/SingleItem/AllItems';


function App() {
  return (
    <>
      <Header />
      <Carousel />
      <Categories />
      <AllItems />
      <Footer />
    </>
  );
}

export default App;

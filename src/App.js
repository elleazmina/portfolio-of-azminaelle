import React from 'react';
import './App.css';
import MyCarousel from './components/Carousel/MyCarousel';
import Footer from './components/Footer/Footer';
import MyNavbar from './components/Navbar/MyNavbar';
import TitleMessage from './components/TitleMessage/TitleMessage';


const App = () => {
  return (
    <div className="App">
      <MyNavbar></MyNavbar>
      <MyCarousel></MyCarousel>
      <TitleMessage></TitleMessage>
      <Footer></Footer>
    </div>
  );
}

export default App;

import React from 'react';
import { Container} from 'react-bootstrap';
import { Parallax } from 'react-parallax';
import './App.css';
import MyCarousel from './components/Carousel/MyCarousel';
import Footer from './components/Footer/Footer';
import MyNavbar from './components/Navbar/MyNavbar';
import TitleMessage from './components/TitleMessage/TitleMessage';
import About from './pages/About/About';
import background from './assets/img/background/background.webp'
import Skills from './pages/Skills/Skills';
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import Blogs from './pages/Blogs/Blogs';
import ContactForm from './pages/ContactForm/ContactForm';
import Timeline from './pages/Timeline/Timeline';


const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
    <MyCarousel />
    <TitleMessage />
    <MyNavbar />
    {/* <Particles
      className="particles particles-box"
      params={particlesOptions}
    /> */}

    <div>
      <Parallax
        blur={{ min: -30, max: 30 }}
        bgImage={background}
        bgImageAlt=""
        strength={-200}
      >
        <div>
          <Container className="container-box rounded">
            <Fade duration={500}>
              <About />
            </Fade>
          </Container>
        </div>
      </Parallax>
    </div>
    <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Skills />
        </Slide>
      </Container>
      <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />

            <Blogs />
          </Fade>
        </Container>
        <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Timeline />
        </Slide>
      </Container>
      <Container className="container-box rounded">
        <Fade duration={500}>
          <hr />
          <ContactForm />
        </Fade>
      </Container>

      <hr />
      <Footer></Footer>
    </div>
  );
}

export default App;

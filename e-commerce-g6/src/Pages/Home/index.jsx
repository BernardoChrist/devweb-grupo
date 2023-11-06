import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { Container } from "react-bootstrap";
import DarkMode from "../../Components/DarkMode";
import firstImage from "../../assets/treino.jpg";
import secondImage from "../../assets/treino.jpg";
import thirdImage from "../../assets/Serrafy.png";
import { Carousel } from "react-bootstrap";
import "./home.css";

const Home = () => {
  return (
    <div className="home-container">
      <header>
        <Header />
      </header>

      <Container fluid className="carousel-container">
        <Carousel fade className="carousel-rectangular-landscape">
          <Carousel.Item>
            <img
              src={firstImage}
              alt="First slide"
              className="carousel-image"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={secondImage}
              alt="Second slide"
              className="carousel-image"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={thirdImage}
              alt="Third slide"
              className="carousel-image"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>

      <footer>
        <Footer />
      </footer>
      <DarkMode />
    </div>
  );
};

export default Home;

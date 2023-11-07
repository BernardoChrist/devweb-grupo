import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { Container } from "react-bootstrap";
import firstImage from "../../assets/viajar.jpg";
import secondImage from "../../assets/treino.jpg";
import thirdImage from "../../assets/radio.jpg";
import { Carousel } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import eletronicImage from "../../assets/eletro.jpg";
import filmeImage from "../../assets/filme.jpg";
import popImage from "../../assets/pop.jpg";
import hiphopImage from "../../assets/hiphop.jpg";
import classicaImage from "../../assets/classica.jpg";
import acusticoImage from "../../assets/acustico.jpg";
import "./home.css";

const Home = () => {
  return (
    <>
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
              <Carousel.Caption>
                <h2>Música para Viajar</h2>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={secondImage}
                alt="Second slide"
                className="carousel-image"
              />
              <Carousel.Caption>
                <h2>Música para Treinar</h2>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={thirdImage}
                alt="Third slide"
                className="carousel-image"
              />
              <Carousel.Caption>
                <h2>Escute agora na Rádio</h2>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
        <h1 className="texto">Música real, impacto real.</h1>
        <h4 className="texto">
          Trabalhamos com os maiores compositores do mundo para levar a você
          trilhas inéditas e exclusivas todos os dias.
        </h4>
        <div className="d-flex flex-wrap">
          <Container>
            <Row>
              <Col xs={6} md={4}>
                <Image src={eletronicImage} width={179} height={179} rounded />
                <h4 className="titulo">Eletrônica e Dance</h4>
              </Col>
              <Col xs={6} md={4}>
                <Image src={filmeImage} width={179} height={179} rounded />
                <h4 className="titulo">Filmes</h4>
              </Col>
              <Col xs={6} md={4}>
                <Image src={popImage} width={179} height={179} rounded />
                <h4 className="titulo">Pop</h4>
              </Col>
              <Col xs={6} md={4}>
                <Image src={hiphopImage} width={179} height={179} rounded />
                <h4 className="titulo">Hip Hop</h4>
              </Col>
              <Col xs={6} md={4}>
                <Image src={classicaImage} width={179} height={179} rounded />
                <h4 className="titulo">Clássico</h4>
              </Col>
              <Col xs={6} md={4}>
                <Image src={acusticoImage} width={179} height={179} rounded />
                <h4 className="titulo">Acústico</h4>
              </Col>
            </Row>
          </Container>
        </div>

        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Home;

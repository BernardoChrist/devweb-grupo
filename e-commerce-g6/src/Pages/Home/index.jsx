import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <Container fluid className="p-0">
      <header>
        <Header />
      </header>
      <section className="pgHome">
        <h1>Teste</h1>
      </section>
      <footer>
        <Footer />
      </footer>
    </Container>
  );
};

export default Home;

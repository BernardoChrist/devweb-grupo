import devBernardo from "../../assets/dev/bernardo.jpg";
import devCaique from "../../assets/dev/caique.png";
import devEduardo from "../../assets/dev/edu.png";
import devJulia from "../../assets/dev/julia.jpg";
import devLiliane from "../../assets/dev/lili.png";
import devMarcos from "../../assets/dev/marcos.jpg";
import "./sobre.css";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

const Sobre = () => {
  return (
    <div className="sobre-page">
      <header>
        <Header />
      </header>
      <div className="sobre-container">
        <div className="sobre">
          <h2>SOBRE NÓS</h2>
          <p>
            O projeto consiste na criação de um E-Commerce de Música chamado
            Serrafy, onde os usuários podem pesquisar e gerenciar músicas e
            álbuns. O aplicativo utiliza Componentes Funcionais e Hooks como
            useState e useEffect, React Router v6 para navegação, axios para
            requisições HTTP e validações de entrada para garantir dados
            completos.
          </p>
        </div>

        <section className="desenvolvedores">
          <h2>DESENVOLVEDORES</h2>
          <ul>
            <li>
              <img className="avatar" src={devBernardo} alt="Bernardo" />
              <a href="https://github.com/BernardoChrist" target="_blank">
                <span>Bernardo Christ</span>
              </a>
            </li>
            <li>
              <img className="avatar" src={devCaique} alt="Caique" />
              <a href="https://github.com/caiquelms" target="_blank">
                <span>Caíque Lemos</span>
              </a>
            </li>
            <li>
              <img className="avatar" src={devEduardo} alt="Eduardo" />
              <a href="https://github.com/eduardocs90" target="_blank">
                <span>Eduardo Carneiro</span>
              </a>
            </li>
            <li>
              <img className="avatar" src={devJulia} alt="Julia" />
              <a href="https://github.com/JuFMacedo" target="_blank">
                <span>Julia Freitas</span>
              </a>
            </li>
            <li>
              <img className="avatar" src={devLiliane} alt="Liliane" />
              <a href="https://github.com/LilianeDavid93" target="_blank">
                <span>Liliane David</span>
              </a>
            </li>
            <li>
              <img className="avatar" src={devMarcos} alt="Marcos" />
              <a href="https://github.com/marcospavao" target="_blank">
                <span>Marcos Pavão</span>
              </a>
            </li>
          </ul>
        </section>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Sobre;

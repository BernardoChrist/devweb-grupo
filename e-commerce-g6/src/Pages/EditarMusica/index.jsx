import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import "./style.css";

const EditarMusica = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <section className="editarmusica">
        <h1>Edite sua musica</h1>

        <div className="inputs">
          <input
            type="text"
            placeholder="ID da Música"
            // value={login}
            // onChange={(e) => setLogin(e.target.value)}
            style={{
              width: "300px",
              height: "40px",
              fontSize: "20px",
              marginLeft: "18px",
            }}
          />
        </div>
        <div className="inputs">
          <input
            type="text"
            placeholder="Nome da Música"
            // value={login}
            // onChange={(e) => setLogin(e.target.value)}
            style={{
              width: "300px",
              height: "40px",
              fontSize: "20px",
              marginLeft: "18px",
            }}
          />
        </div>

        <div className="inputs">
          <input
            type="text"
            placeholder="Autor da Música"
            // value={login}
            //onChange={(e) => setLogin(e.target.value)}
            style={{
              width: "300px",
              height: "40px",
              fontSize: "20px",
              marginLeft: "18px",
            }}
          />
        </div>

        <div className="inputs">
          <input
            type="text"
            placeholder="Genero Musical"
            //value={login}
            //onChange={(e) => setLogin(e.target.value)}
            style={{
              width: "300px",
              height: "40px",
              fontSize: "20px",
              marginLeft: "18px",
            }}
          />
        </div>
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default EditarMusica;

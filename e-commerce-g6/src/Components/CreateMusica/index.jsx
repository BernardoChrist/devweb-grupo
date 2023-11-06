import "./style.css";
import React, { useState } from "react";

const CreateMusica = ({
  novaMusica,
  setNovaMusica,
  autor,
  setAutor,
  genero,
  setGenero,
  cadastrar,
  buscarPorGenero,
}) => {
  const [filtroGenero, setFiltroGenero] = useState("");

  const handleCadastrar = () => {
    if (!novaMusica || !autor || !genero) {
      alert("Todos os campos devem ser preenchidos.");
      return;
    }

    cadastrar();
  };

  const handleBuscarPorGenero = () => {
    buscarPorGenero(filtroGenero);
  };

  return (
    <div className="div2">
      <h2>Adicione sua Música</h2>
      <input
        type="text"
        value={novaMusica}
        onChange={(e) => setNovaMusica(e.target.value)}
        style={{
          width: "200px",
          height: "30px",
          fontSize: "16px",
          marginLeft: "18px",
        }}
        placeholder="Nome da Música"
      />
      <input
        type="text"
        value={autor}
        onChange={(e) => setAutor(e.target.value)}
        style={{
          width: "200px",
          height: "30px",
          fontSize: "16px",
          marginLeft: "18px",
        }}
        placeholder="Autor"
      />
      <input
        type="text"
        value={genero}
        onChange={(e) => setGenero(e.target.value)}
        style={{
          width: "200px",
          height: "30px",
          fontSize: "16px",
          marginLeft: "18px",
        }}
        placeholder="Gênero"
      />
      <br />
      <button className="botao" onClick={handleCadastrar}>
        Adicionar Música
      </button>
      <br />
      <input
        type="text"
        value={filtroGenero}
        onChange={(e) => setFiltroGenero(e.target.value)}
        style={{
          width: "200px",
          height: "30px",
          fontSize: "16px",
          marginLeft: "18px",
        }}
        placeholder="Filtrar por Gênero"
      />
      <button className="botao" onClick={handleBuscarPorGenero}>
        Buscar por Gênero
      </button>
    </div>
  );
};

export default CreateMusica;

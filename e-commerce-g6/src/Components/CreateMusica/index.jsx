import "./style.css";
import React from "react";

const CreateMusica = ({
  novaMusica,
  setNovaMusica,
  autor,
  setAutor,
  genero,
  setGenero,
  cadastrar,
}) => {
  return (
    <div className="div2">
      <h2 className="h2">Cadastre sua Música</h2>
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
      <button className="botao" onClick={cadastrar}>
        Cadastrar
      </button>
    </div>
  );
};

export default CreateMusica;

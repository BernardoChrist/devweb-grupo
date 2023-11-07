import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import axios from "axios";
import "./style.css";

const EditMuicModel = {
  id: "",
  nome: "",
  autor: "",
  genero: "",
};

const EditarMusica = () => {
  const url = "https://65482e6add8ebcd4ab229f62.mockapi.io/serrafy";
  const { state } = useLocation();
  const Navigate = useNavigate();
  const [editMusicModel, setEditMusicModel] = useState(EditMuicModel);

  function handleEditMusicModel(value, key) {
    setEditMusicModel({
      ...editMusicModel,
      [key]: value,
    });
  }

  const editarMusica = async (id) => {
    try {
      const response = await axios.put(`${url}/${id}`, editMusicModel);
      alert("Musica alterada com sucesso:", response.status);
      Navigate("/serrafy");
    } catch (error) {
      alert("Erro na requisição editar Musica:", error);
    }
  };

  useEffect(() => {
    setEditMusicModel(state.item);
  }, [state]);

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
            placeholder="Nome da Música"
            value={editMusicModel.nome}
            onChange={(e) => handleEditMusicModel(e.target.value, "nome")}
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
            value={editMusicModel.autor}
            onChange={(e) => handleEditMusicModel(e.target.value, "autor")}
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
            value={editMusicModel.genero}
            onChange={(e) => handleEditMusicModel(e.target.value, "genero")}
            style={{
              width: "300px",
              height: "40px",
              fontSize: "20px",
              marginLeft: "18px",
            }}
          />
        </div>

        <div>
          <button
            className="botaoEditar"
            style={{
              width: "200px",
              height: "40px",
              fontSize: "20px",
              marginLeft: "18px",
              marginTop: "40px",
            }}
            onClick={(e) => editarMusica(editMusicModel.id)}
          >
            Salvar Alterações
          </button>
        </div>
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default EditarMusica;

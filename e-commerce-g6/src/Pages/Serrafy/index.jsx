import React, { useState, useEffect } from "react";
import axios from "axios";
import CreateMusica from "../../Components/CreateMusica";
import Musica from "../../Components/Musica";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import "./style.css";

const url = "https://65482e6add8ebcd4ab229f62.mockapi.io/serrafy";

const App = () => {
  const [novaMusica, setNovaMusica] = useState("");
  const [musicas, setMusicas] = useState([]);
  const [autor, setAutor] = useState("");
  const [genero, setGenero] = useState("");
  const [loading, setLoading] = useState(false);

  const carregarMusicasPorGenero = async (genero) => {
    setLoading(true);
    try {
      const response = await axios.get(`${url}?genero=${genero}`);
      console.log("Resposta da requisição carregarMusicasPorGenero:", response);
      setMusicas(response.data);
    } catch (error) {
      console.error("Erro na requisição carregarMusicasPorGenero:", error);
    } finally {
      setLoading(false);
    }
  };

  const cadastrar = async () => {
    const novaMusicaData = {
      nome: novaMusica,
      autor: autor,
      genero: genero,
    };

    try {
      const response = await axios.post(url, novaMusicaData);
      console.log("Resposta da requisição cadastrar:", response);
      setMusicas([...musicas, response.data]);
      setNovaMusica("");
      setAutor("");
      setGenero("");
    } catch (error) {
      console.error("Erro na requisição cadastrar:", error);
    }
  };

  const editarMusica = async (id) => {
    try {
      const response = await axios.editarMusica(`${url}/${id}`);
      console.log("Musica alterada com sucesso:", response);
      setMusicas(musicas.filter((musica) => musica.id !== id));
    } catch (error) {
      console.error("Erro na requisição editar Musica:", error);
    }
  };

  const excluirMusica = async (id) => {
    try {
      const response = await axios.delete(`${url}/${id}`);
      console.log("Resposta da requisição excluirMusica:", response);
      setMusicas(musicas.filter((musica) => musica.id !== id));
    } catch (error) {
      console.error("Erro na requisição excluirMusica:", error);
    }
  };

  useEffect(() => {
    carregarMusicasPorGenero(genero);
  }, [genero]);

  return (
    <div>
      <header>
        <Header />
      </header>

      <main>
        <section>
          <CreateMusica
            novaMusica={novaMusica}
            setNovaMusica={setNovaMusica}
            autor={autor}
            setAutor={setAutor}
            genero={genero}
            setGenero={setGenero}
            cadastrar={cadastrar}
            buscarPorGenero={carregarMusicasPorGenero}
          />
        </section>
        <section>
          {/* <button onClick={carregarMusicas}>Atualizar</button> */}
          <h2 className="hlist">Sua Playlist</h2>
          {musicas.map((musica) => (
            <Musica
              key={musica.id}
              item={musica}
              editarMusica={editarMusica}
              excluirMusica={excluirMusica}
            />
          ))}
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;

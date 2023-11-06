import { useState, useEffect } from "react";
import axios from "axios";
import CreateMusica from "../../Components/CreateMusica";
import Musica from "../../Components/Musica";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import "./style.css";

const url = "https://65482e6add8ebcd4ab229f62.mockapi.io/serrafy";

const MusicaList = () => {
  const [novaMusica, setNovaMusica] = useState("");
  const [musica, setMusica] = useState([]);
  const [loading, setLoading] = useState(false);
  const [prova, setProva] = useState(false);

  const cadastrar = async () => {
    const musica = {
      nome: novaMusica,
      genero: "genero",
      autor: "autor",
      done: false,
    };

    try {
      const { data } = await axios.post(url, musica);
      console.log(data);
      setMusica([...Musica, data]);
      setNovaMusica("");
    } catch (err) {
      console.log(err);
    }
  };

  const excluirMusica = async (id) => {
    console.log("Excluir Musica: ", id);
    try {
      const { data } = await axios.delete(`${url}/${id}`);
      console.log(data);

      const arrayFiltrado = musica.filter((item) => item.id != id);
      setMusica(arrayFiltrado);
    } catch (err) {
      console.log(err);
    }
  };

  const getMusica = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(url);
      console.log(data);
      setMusica(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const editarMusica = async (id, novaMusica) => {
    try {
      const { data } = await axios.put(`${url}/${id}`, novaMusica);

      setMusica((prevMusica) => {
        return prevMusica.map((item) => {
          if (id == item.id) {
            return data;
          }
          return item;
        });
      });

      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMusica();
  }, []);

  useEffect(() => {
    console.log("USEEFFECT!");
  }, []);

  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <h1></h1>
        <section>
          <CreateMusica
            novaMusica={novaMusica}
            setNovaMusica={setNovaMusica}
            cadastrar={cadastrar}
          />
        </section>
        <section>
          <h2 className="hlist">Lista de Musicas</h2>
          {musica.map((item) => (
            <Musica
              key={item.id}
              item={item}
              excluirMusica={excluirMusica}
              editarMusica={editarMusica}
            />
          ))}
        </section>
        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
};

export default MusicaList;

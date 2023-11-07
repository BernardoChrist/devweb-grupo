import { useNavigate } from "react-router-dom";
import "./style.css";

const Musica = ({ item, excluirMusica, editarMusica }) => {
  const Navigate = useNavigate();
  const mudarPg = () => {
    Navigate("/editar", { state: { item } });
  };

  const handleEditarMusica = () => {
    editarMusica(item.id, { genero: "pagode" });
  };

  return (
    <div className="div">
      <span className="nome-genero">
        {item.nome} - {item.autor} - {item.genero}
      </span>
      <div className="botoes">
        <button onClick={mudarPg}>Editar</button>
        <button onClick={() => excluirMusica(item.id)}>Excluir</button>
      </div>
    </div>
  );
};

export default Musica;

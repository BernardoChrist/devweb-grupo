import "./style.css";

const Musica = ({ item, excluirMusica, editarMusica }) => {
  const handleEditarMusica = () => {
    editarMusica(item.id, { genero: "pagode" });
  };

  return (
    <div className="div">
      <span className="nome-genero">
        {item.nome} - {item.genero}
      </span>
      <div className="botoes">
        <button onClick={handleEditarMusica}>Editar</button>
        <button onClick={() => excluirMusica(item.id)}>Excluir</button>
      </div>
    </div>
  );
};

export default Musica;

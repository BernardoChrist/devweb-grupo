import "./style.css";

const CreateMusica = ({ novaMusica, setNovaMusica, cadastrar }) => {
  return (
    <div className="div2">
      <h2 className="h2">Cadastre sua Musica</h2>
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
      />
      <br />
      <button className="botao" onClick={cadastrar}>
        Cadastrar
      </button>
    </div>
  );
};
export default CreateMusica;

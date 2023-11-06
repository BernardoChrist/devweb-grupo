const CreateMusica = ({ novaMusica, setNovaMusica, cadastrar }) => {
  return (
    <div>
      <h2>Cadastre sua Musica</h2>
      <input
        type="text"
        value={novaMusica}
        onChange={(e) => setNovaMusica(e.target.value)}
      />
      <button onClick={cadastrar}>Cadastrar</button>
    </div>
  );
};
export default CreateMusica;

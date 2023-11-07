import { React, useState } from "react";

const EditMusica = ({ editarMusica, musica }) => {
  const [music, setMusic] = useState(musica);

  const handleChange = (event) => {
    setMusic(event.target.value);
  };

  const handleEditarMusica = () => {
    editarMusica(music);
  };

  return (
    <div>
      <input type="text" value={music} onChange={handleChange} />
      <button onClick={handleEditarMusica}>Editar</button>
    </div>
  );
};

export default EditMusica;

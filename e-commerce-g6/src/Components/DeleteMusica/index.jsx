import React from "react";

const DeleteMusica = () => {
  return (
    <div>
      {musicas.map((musica) => (
        <Musica key={musica.id} item={musica} excluirMusica={excluirMusica} />
      ))}
    </div>
  );
};

export default DeleteMusica;

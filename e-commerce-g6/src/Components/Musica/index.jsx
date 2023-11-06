import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {
  FcMediumPriority,
  FcHighPriority,
  FcLowPriority,
} from "react-icons/fc";

const Musica = ({ item, excluirMusica }) => {
  const escolhePrioridade = (genero) => {
    switch (genero) {
      case "pagode":
        return <FcHighPriority />;
      case "rock":
        return <FcMediumPriority />;
      case "mpb":
        return <FcLowPriority />;
      default:
        return null;
    }
  };

  return (
    <Card>
      <Card.Header>
        {escolhePrioridade(item.genero)}
        {item.nome}
      </Card.Header>
      <Card.Body>
        <Card.Text>{item.genero}</Card.Text>
        <Button variant="primary" onClick={() => editarMusica(item.id)}>
          Editar
        </Button>
        <Button variant="danger" onClick={() => excluirMusica(item.id)}>
          Excluir
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Musica;

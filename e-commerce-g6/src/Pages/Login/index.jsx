import React from "react";
import { useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import "./style.css";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

const dados = {
  login: "Admin",
  senha: "123",
};
export default function Login() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();
  const { parametro } = useParams();
  const { state } = useLocation();
  console.log(state);

  const entrar = () => {
    console.log("FUNCAO ENTRAR");
    if (login == "" || senha == "") {
      console.log("Preencha os campo de login e senha");
    } else if (login == dados.login && senha == dados.senha) {
      const info = {
        login: login,
        senha: senha,
      };
      console.log(info);

      localStorage.setItem("info", JSON.stringify(info));

      setLogin("");
      setSenha("");

      navigate("/login");
    } else {
      alert("Login ou Senha Inválidos!");
    }
  };
  return (
    <>
      <header>
        <Header />
      </header>
      <div className="login">
        <form className="form">
          <h1>Página de Login</h1>
          <input
            type="text"
            placeholder="Digite Seu login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            style={{
              width: "300px",
              height: "45px",
              fontSize: "20px",
              marginTop: "25px",
              marginBottom: "15px",
            }}
          />
          <br />
          <input
            type="password"
            placeholder="Digite Sua Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            style={{
              width: "300px",
              height: "45px",
              fontSize: "20px",
              marginBottom: "15px",
            }}
          />
          <br />
          <button className="botaouniversal" type="button" onClick={entrar}>
            Entrar
          </button>
        </form>
      </div>
      <header>
        <Footer />
      </header>
    </>
  );
}

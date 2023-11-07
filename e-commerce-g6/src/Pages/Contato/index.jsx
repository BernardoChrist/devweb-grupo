import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import "./style.css";
import React, { useState, useEffect } from "react";

const Contato = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    const nomeSalvo = localStorage.getItem("nome");
    const emailSalvo = localStorage.getItem("email");
    const mensagemSalva = localStorage.getItem("mensagem");

    if (nomeSalvo) setNome(nomeSalvo);
    if (emailSalvo) setEmail(emailSalvo);
    if (mensagemSalva) setMensagem(mensagemSalva);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("nome", nome);
    localStorage.setItem("email", email);
    localStorage.setItem("mensagem", mensagem);

    setNome("");
    setEmail("");
    setMensagem("");
  };

  return (
    <div className="contato">
      <header>
        <Header />
      </header>
      <div className="container">
        <h1>Entre em Contato</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="mensagem">Mensagem:</label>
            <textarea
              id="mensagem"
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
            ></textarea>
          </div>
          <button className="enviar-btn" type="submit">
            Enviar
          </button>
        </form>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Contato;

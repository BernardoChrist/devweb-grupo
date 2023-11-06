import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Contato from "./Pages/Contato";
import Home from "./Pages/Home";
import Serrafy from "./Pages/Serrafy";
import "./App.css";
import EditarMusica from "./Pages/EditarMusica";

function App() {
  return (
    <Routes>
      <Route path="/serrafy" element={<Serrafy />} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="*" element={<h1>Pagina não encontrada</h1>} />
      <Route path="/editar" element={<EditarMusica />} />
    </Routes>
  );
}

export default App;

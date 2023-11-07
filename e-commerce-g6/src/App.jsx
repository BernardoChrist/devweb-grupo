import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Contato from "./Pages/Contato/index";
import Home from "./Pages/Home/home";
import Sobre from "./Pages/Sobre/sobre";
import Serrafy from "./Pages/Serrafy/index";
import "./App.css";
import EditarMusica from "./Pages/EditarMusica/index";
import { ThemeContextProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeContextProvider>
      <Routes>
        <Route path="/serrafy" element={<Serrafy />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/editar" element={<EditarMusica />} />
        <Route path="*" element={<h1>Pagina não encontrada</h1>} />
      </Routes>
    </ThemeContextProvider>
  );
}

export default App;

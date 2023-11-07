import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Contato from "./Pages/Contato/index";
import Home from "./Pages/Home/home";
import Serrafy from "./Pages/Serrafy/index";
import "./App.css";
import EditarMusica from "./Pages/EditarMusica";
import { ThemeContextProvider } from "./context/ThemeContext";

function App() {
  return (
<<<<<<< HEAD
    <ThemeContextProvider>
      <Routes>
        <Route path="/serrafy" element={<Serrafy />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<h1>Pagina não encontrada</h1>} />
        <Route path="/editar" element={<EditarMusica />} />
      </Routes>
    </ThemeContextProvider>
=======
    <Routes>
      <Route path="/serrafy" element={<Serrafy />} />
      <Route path="/" element={<Home />} />
      <Route path="/home/:user" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/editar" element={<EditarMusica />} />
      <Route path="*" element={<h1>Pagina não encontrada</h1>} />
    </Routes>
>>>>>>> e103f529e5065d655e9fbc602d45eae777554c05
  );
}

export default App;

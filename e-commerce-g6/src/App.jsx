import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Contato from "./Pages/Contato";
import Home from "./Pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contato" element={<Contato />} />
      {/* <Route path="" element={} /> */}
      <Route path="*" element={<h1>Pagina não encontrada</h1>} />
    </Routes>
  );
}

export default App;

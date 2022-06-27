import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../../../views/pages/Home";
import About from "../../../views/pages/About";
import Param from "../../../views/pages/Param";
import NotFound from "../../../views/pages/NotFound";

import "./Content.css";

const Content = () => {
  return (
    <main className="content">
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/param/:id" element={<Param />} />
        {/* Espera receber um parâmetro na URL */}
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
};

// path indica qual a rota será usada para renderizar o componente
// path="*" engloba quaisquer outras urls que não estão sendo mapeadas
// Em element será indicado qual o componente será renderizado
// exact garante a rota de forma estrita

export default Content;

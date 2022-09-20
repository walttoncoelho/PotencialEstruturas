import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { NotFound } from "./pages/NotFound/NotFound";
import { ServicosPage } from "./pages/Servicos/ServicosPagePage";
import { Sobre } from "./pages/Sobre/Sobre";

import { Contato } from "./pages/Contato/Contato";
import Suspenso from "./pages/suspenso/Suspenso";

export function AppRouter() {
  return (
    
    <Routes>
      <Route path="/" element={<Navigate to="/Home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/servicos" element={<ServicosPage />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/suspenso" element={<Suspenso />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

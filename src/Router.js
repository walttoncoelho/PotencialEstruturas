import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { NotFound } from "./pages/NotFound/NotFound";
import { ProcedimentosPage } from "./pages/Procedimentos/ProcedimentosPage";
import { Sobre } from "./pages/Sobre/Sobre";
import { TratamentosPage } from "./pages/Tratamentos/TratamentosPage";
import { ProdutosPage } from "./pages/Produtos/ProdutosPage";
import { Contato } from "./pages/Contato/Contato";
import { ConsorcioPage } from "./pages/Consorcio/ConsorcioPage";



export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} /> 
      <Route path="/sobre" element={<Sobre />} /> 
      <Route path="/tratamentos" element={<TratamentosPage />} />
      <Route path="/procedimentos" element={<ProcedimentosPage />} />
      <Route path="/produtos" element={<ProdutosPage />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/consorcio" element={<ConsorcioPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

import React from "react";
import { BannerTopo } from "./Banner/BannerTopo";

import { Servicos } from "./Servicos/Servicos";

import { Parceiro } from "./Parceiros/Parceiros";

import { OutrosServicos } from "./OutrosServicos/OutrosServicos";

export function Home() {
  return (
    <>
      <BannerTopo />
      <Servicos />
      <OutrosServicos />

      <Parceiro title="Parceiros" />
    </>
  );
}

import React from "react";
import { Procedimentos } from "./data/procedimentos";

import {
  Banner,
  Title,
 
} from "./styles/style";

export function ProcedimentosPage() {
  return (
    <>
      <Banner>
        <Title>
            
          <h3>
          Vasta experiência, redução  no custo final da obra e colaboradores com alto nível técnico.
          </h3>
        </Title>
      </Banner>

      <Procedimentos />


    </>
  );
}

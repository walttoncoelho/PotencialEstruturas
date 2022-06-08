import React from "react";
import { ServiceCard } from "../Home/Servicos/ServiceCard";
import { Galery } from "./data/galery";

import { Container, ContainerImg, Grid1, Grid2, Grid3 } from "./style";

export function Gerenciamento() {
  return (
    <>
      <Container>
        <Grid1>
          <Grid2>
            <h1>
              <span>Gerenciamento de resíduos</span>
            </h1>

            <p>
              Por meio de equipe qualificada realizamos o gerenciamento e
              beneficiamento de resíduos no site do cliente.
            </p>
          </Grid2>
          <ContainerImg>
            <Galery />
          </ContainerImg>
        </Grid1>

        <Grid3>
          <ServiceCard />
        </Grid3>
      </Container>
    </>
  );
}

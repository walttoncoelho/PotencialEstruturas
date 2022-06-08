import React from "react";
import { Banner, Grid1, Grid2 } from "./style";

export function Missao() {
  return (
    <>
      <Banner>
        <Grid1>
          <img src="./images/sobre/selo.png" alt="Selo" />    
        </Grid1>
        <Grid2>
          <h2>
            Oficialmente reconhecidos como refefrência nacional em qualidade de
            serviços e produtos no ano de 2020 pela Ancec.
          </h2>
        </Grid2>
      </Banner>
      <Banner>
        <Grid2>
          <h2>
           Reconhecida na 1ª edição do Prêmio Beleza Mais Top, pela responsabilidade social e qualidade de serviços prestados no estado do Maranhão em 2021.
          </h2>
        </Grid2>
        <Grid1>
        
          <img src="./images/sobre/premio.png" alt="Selo" />
        </Grid1>
      </Banner>
      
    </>
  );
}

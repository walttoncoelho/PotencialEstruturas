import React from "react";
import { Container,  Grid1, Grid2} from "./style";

export function QuemSomos() {
  return (

    <>
    <Container>  

        <Grid1>
          <img src="./images/sobre/Handshake.png" alt="banner" />
          <h1>QUEM SOMOS</h1>
          <p>
            A expressão Lorem ipsum em design gráfico e editoração é um texto
            padrão em latim utilizado na produção gráfica para preencher os
            espaços de texto em publicações.
          </p>
        </Grid1>
        <Grid2>
        <img src="./images/sobre/Megaphone.png" alt="banner" />
          <h1>MISSÃO</h1>
          <p>
            A expressão Lorem ipsum em design gráfico e editoração é um texto
            padrão em latim utilizado na produção gráfica para preencher os
            espaços de texto em publicações.
          </p>
        </Grid2>
        <Grid2>
        <img src="./images/sobre/Eye.png" alt="banner" />
          <h1>VISÃO</h1>
          <p>
            A expressão Lorem ipsum em design gráfico e editoração é um texto
            padrão em latim utilizado na produção gráfica para preencher os
            espaços de texto em publicações.
          </p>
        </Grid2>
        <Grid2>
        <img src="./images/sobre/Star.png" alt="banner" />
          <h1>VALORES</h1>
          <p>
            A expressão Lorem ipsum em design gráfico e editoração é um texto
            padrão em latim utilizado na produção gráfica para preencher os
            espaços de texto em publicações.
          </p>
        </Grid2>    
    </Container>
    </>
  );
}

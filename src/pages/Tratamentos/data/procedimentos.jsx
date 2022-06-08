import React from "react";
import procedimentos from "./data";
import imgWhatsApp from "../../../assets/whatsapp.svg";

import {
  Container,
  Grid1,
  Grid2,
  Grid3,
  Grid4,
  Grid5,
  Grid6,
  Box
} from "../styles/style";
import {
  Buttom,
  ButtomAtendimento,
 
} from "../../../components/buttons/style";

export function Procedimentos() {
  return (
    <>
      {procedimentos.map((item) => (
        <Container key={item.id}>
          <Grid1>
            <img src={item.image} alt={item.image_alt} />
          </Grid1>
          <Grid2>
            <Grid3>
              <h3>{item.tratamento}</h3>
              <p>{item.descricao}</p>
            </Grid3>
            <Grid4>
              <Grid5>
                <Box>
                  <h4>QUANDO COMEÇO A PERCEBER OS RESULTADOS</h4>
                  <p>{item.resultado}</p>
                </Box>
                <Box>
                  <h4>TEM RESTRIÇÕES?</h4>
                  <p>{item.restricao}</p>
                </Box>
              </Grid5>
              <Grid6>
                
                  <ButtomAtendimento>
                  <img src={imgWhatsApp} alt="Logo" />
                    Tirar dúvidas com uma especialista
                  </ButtomAtendimento>
               

                <Buttom>Quero Agendar</Buttom>
              </Grid6>
            </Grid4>
          </Grid2>
        </Container>
      ))}
    </>
  );
}

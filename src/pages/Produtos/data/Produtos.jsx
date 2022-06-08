import React from "react";
import procedimentos from "./data";
import imgWhatsApp from "../../../assets/whatsapp.svg";

import {
  Container,
  Card,
  Grid1,
  Grid2,
  Grid3,
  Grid4,
  Box1,
  Box2,
  Grid6,
  Banner,
  ContainerCart,
  BoxCart1,
  BoxCart2,
  Cartd
} from "../styles/style";
import { ButtomAtendimento } from "../../../components/buttons/style";
import datacartao from "./datacartao";

export function Produtos() {
  return (
    <>
      <Banner>
        <Box1>
          <h1>Seu tratamento diário e no conforto da sua casa.</h1>
        </Box1>

        <Box2>
          {/* <img src="./images/produtos/banho.png" alt="Logo" /> */}
        </Box2>
      </Banner>

      {procedimentos.map((item) => (
        <Container>
          <Card key={item.id}>
            <Grid1>
              <img src={item.image} alt={item.image_alt} />
            </Grid1>
            <Grid2>
              <Grid3>
                <h3>{item.produto}</h3>
                <p>{item.descricao}</p>
              </Grid3>
              <Grid4>
                <Grid6>
                  <ButtomAtendimento>
                    <img src={imgWhatsApp} alt="Logo" />
                    Quero reservar o meu produto agora!
                  </ButtomAtendimento>
                </Grid6>
              </Grid4>
            </Grid2>
          </Card>
        </Container>
      ))}
      <ContainerCart>
        <BoxCart1>
          <h1>Pague com</h1>
        </BoxCart1>
        <BoxCart2 >
        {datacartao.map((item) => (
            <Cartd key={item.id}>
              <img src={item.image} alt={item.image_alt} />
            </Cartd>
        ))}
          </BoxCart2>
        </ContainerCart>
    </>
  );
}

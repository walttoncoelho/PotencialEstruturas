import React from "react";
import { QuemSomos } from "./QuemSomos/QuemSomos";

import { Container, Box, Img } from "./style";

export function Sobre() {
  return (
    <>
      <Container>
        <Box>
          <h2>O nosso dia a dia é construir o futuro.</h2>
        </Box>
        <Img>
          <img src="./images/sobre/sobre.png" alt="banner" />
        </Img>
      </Container>
      <QuemSomos />
    </>
  );
}

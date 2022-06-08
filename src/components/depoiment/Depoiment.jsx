import React from "react";

import depoiment from "./data/data";
import { Container, Grid1 } from "./style";

export function Depoiment() {
  return (
    <>
      <Container>
        {depoiment.map((item) => (
          <Grid1 key={item.id}>
            <img src={item.image} alt={item.image_alt} />

            <h3>{item.client}</h3>

            <h4>{item.pacote}</h4>
            <p>{item.describe}</p>
          </Grid1>
        ))}
      </Container>
    </>
  );
}

import React from "react";

import depoiment from "./data/data";
import { Grid1, Grid2, Card, Container } from "./style";

export function Parceiro(props) {
  return (
    <>
      <Container>
        <Grid1>
          <h2>{props.title}</h2>
        </Grid1>
        <Grid2>
          {depoiment.map((item) => (
            <Card key={item.id}>
              <img src={item.image} alt={item.image_alt} />
              <h3>{item.client}</h3>
              <p>{item.describe}</p>
            </Card>
          ))}
        </Grid2>
      </Container>
    </>
  );
}

import React from "react";
import { FormContato } from "../../components/forms/contato/FormContato";

import {
  Banner,
  Container,
  Grid1,
  Grid2,
  Grid3,
  Grid4,
  Grid5,
  Title
} from "./style";

export function Contato() {
  return (
    <>
      <Banner>
        <Title>
          <h3>Tem uma pergunta? Nós estamos aqui pra ajudar!</h3>
        </Title>
      </Banner>
      <Container>
        <Grid1>
          <Grid2>
            <FormContato />
          </Grid2>
        </Grid1>
        <Grid3>
          <Grid4>
            <h2>Onde estamos</h2>
            <p>
              Potencial Estruturas Metálicas <br />
              Rua José Sarney, São Cristovão / São Luís-ma
            </p>
          </Grid4>

          <Grid5>
            <div>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.7984099043565!2d-44.232725285244044!3d-2.5722058981257967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7f69aa1426baddb%3A0x9b9ba436a203bd16!2zUi4gSm9zw6kgU2FybmV5IC0gSmFyZGltIFPDo28gQ3Jpc3RvdsOjbywgU8OjbyBMdcOtcyAtIE1BLCA2NTA1NS0zMDA!5e0!3m2!1spt-BR!2sbr!4v1654696942433!5m2!1spt-BR!2sbr"
                title="Localização"
                width="600"
                height="450"               
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Grid5>
        </Grid3>
      </Container>
    </>
  );
}

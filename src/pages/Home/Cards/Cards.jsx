import React from "react";
import { Container, Grid, Grid1, Grid2} from "./style";

export function Cards() {
  return (

    <>
    <Container>
    
    <h1>
    <strong>ATUAMOS EM TODO</strong> O TERRITÓRIO NACIONAL
    </h1>
{/*   <ContainerBox> */}

      <Grid>
        <Grid1>
          <img src="./images/diferencial/ClockClockwise.png" alt="banner" />
          <h1>QUALIDADE E PRAZO</h1>
          <p>
            Desde o planejamento a execução, trabalhamos seguindo a melhor estratégia de gerenciamendo de projeto com qualidade e prazo, para que você tenha o melhor
            serviço.

          </p>
        </Grid1>
        <Grid2>
        <img src="./images/diferencial/SketchLogo.png" alt="banner" />
          <h1>INTEGRIDADE</h1>
          <p>
            Nossa equipe é composta por profissionais altamente capacitados e experientes, que trabalham com a integridade e a transparência de todos os nossos clientes.
          </p>
        </Grid2>
        <Grid2>
        <img src="./images/diferencial/SpeakerHigh.png" alt="banner" />
          <h1>COMUNICAÇÃO</h1>
          <p>
            Prezamos pela transparência e a comunicação, que nos permite ajudar você a entender o que está acontecendo e a resolver os problemas que estão surgindo de forma rápida e eficiente.
          </p>
        </Grid2>
        <Grid2>
        <img src="./images/diferencial/ShieldCheck.png" alt="banner" />
          <h1>SEGURANÇA</h1>
          <p>
            Seguimos todas as normas de segurança e de qualidade, além da utilização rigorosa de EPIS por todos os nossos colaboradores, para que você tenha um serviço de qualidade e seguro.
          </p>
        </Grid2>
      </Grid>
{/*   </ContainerBox> */}
    </Container>
    </>
  );
}

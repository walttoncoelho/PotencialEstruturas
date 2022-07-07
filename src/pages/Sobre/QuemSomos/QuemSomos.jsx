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
            A Potencial Estruturas atua na construção em obras especiais e equipamentos, contamos com colaboradores altamente qualificados e tecnologia de ponta para oferecer projetos com excelência em consultoria, inspeção, planejamento e execução de estruturas metálicas para a Indústria Petrolífera e estrutural de Shoppings.
          </p>
        </Grid1>
        <Grid2>
        <img src="./images/sobre/Megaphone.png" alt="banner" />
          <h1>MISSÃO</h1>
          <p>
            Executar nossos trabalhos com transparênciam qualidade e eficiência, buscando sempre o melhor atendimento e gestão de pessoas e dos recurssos prezando pela qualidade segurança e durabilidade dos nossos serviços.
          </p>
        </Grid2>
        <Grid2>
        <img src="./images/sobre/Eye.png" alt="banner" />
          <h1>VISÃO</h1>
          <p>
            Alcançar o reconhecimento nacional em relação aos nossos serviços, pautados pela nossa qualidade, rapidez na execuição e gestão.
          </p>
        </Grid2>
        <Grid2>
        <img src="./images/sobre/Star.png" alt="banner" />
          <h1>VALORES</h1>
          <p>
            Transparência, visão de futuro, Crescer e evoluir de forma coletiva, Comprometimento, Valorizar quem faz a nossa empresa.
          </p>
        </Grid2>    
    </Container>
    </>
  );
}

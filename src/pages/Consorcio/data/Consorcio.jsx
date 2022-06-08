import React from "react";
import procedimentos from "./data";
import imgWhatsApp from "../../../assets/whatsapp.svg";

import {
  Container,
  Card,
  Grid1,
  Grid2,
  Grid3,  
  Grid5,
  Box,
  Box1,
  Box2,
  Grid6,
  Banner,
  ContainerCart,
  BoxCart1,
  BoxCart2,
  Cartd,
  Container2,
  Box4,
  Box3
} from "../styles/style";
import { ButtomAtendimento } from "../../../components/buttons/style";
import datacartao from "./datacartao";

export function Consorcio() {
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
      <Container2>
        <Box3>
          <h4>
            <svg
              width="30"
              height="30"
              viewBox="0 0 58 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29 36.25C34.0051 36.25 38.0625 32.1926 38.0625 27.1875C38.0625 22.1824 34.0051 18.125 29 18.125C23.9949 18.125 19.9375 22.1824 19.9375 27.1875C19.9375 32.1926 23.9949 36.25 29 36.25Z"
                stroke="white"
                stroke-width="2"
                stroke-miterlimit="10"
              />
              <path
                d="M14.4541 45.1766C15.8178 42.4905 17.8987 40.2345 20.466 38.6586C23.0334 37.0828 25.987 36.2486 28.9994 36.2486C32.0118 36.2486 34.9654 37.0828 37.5328 38.6586C40.1002 40.2345 42.181 42.4905 43.5447 45.1766"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M45.3125 16.3125C47.3145 16.3125 48.9375 14.6895 48.9375 12.6875C48.9375 10.6855 47.3145 9.0625 45.3125 9.0625C43.3105 9.0625 41.6875 10.6855 41.6875 12.6875C41.6875 14.6895 43.3105 16.3125 45.3125 16.3125Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M45.3125 9.0625V6.34375"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M42.1627 10.875L39.8291 9.51562"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M42.1627 14.5L39.8291 15.8594"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M45.3125 16.3125V19.0312"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M48.4609 14.5L50.7945 15.8594"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M48.4609 10.875L50.7945 9.51562"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M50.5914 26.3945C50.7013 27.2586 50.7543 28.129 50.75 29C50.75 33.3018 49.4744 37.5069 47.0845 41.0837C44.6946 44.6604 41.2977 47.4482 37.3234 49.0944C33.3491 50.7406 28.9759 51.1713 24.7568 50.3321C20.5377 49.4929 16.6622 47.4214 13.6204 44.3796C10.5786 41.3378 8.50716 37.4623 7.66793 33.2432C6.8287 29.0241 7.25942 24.6509 8.90563 20.6766C10.5518 16.7024 13.3396 13.3055 16.9164 10.9155C20.4931 8.52563 24.6983 7.25001 29 7.25001C29.6733 7.24576 30.3463 7.27601 31.0164 7.34064"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Mais de 1.200 mulheres beneficiadas somente no ano de 2021
          </h4>
        </Box3>
        <Box4>
          <h4>
            <svg
              width="58"
              height="58"
              viewBox="0 0 58 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M47.125 12.6875H10.875C8.87297 12.6875 7.25 14.3105 7.25 16.3125V41.6875C7.25 43.6895 8.87297 45.3125 10.875 45.3125H47.125C49.127 45.3125 50.75 43.6895 50.75 41.6875V16.3125C50.75 14.3105 49.127 12.6875 47.125 12.6875Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.25 27.1875H20.1188C20.5362 27.1852 20.9413 27.3289 21.264 27.5936C21.5867 27.8584 21.8067 28.2277 21.8859 28.6375C22.2321 30.2677 23.1275 31.7295 24.4225 32.7784C25.7175 33.8273 27.3335 34.3996 29 34.3996C30.6665 34.3996 32.2825 33.8273 33.5775 32.7784C34.8725 31.7295 35.7679 30.2677 36.1141 28.6375C36.1933 28.2277 36.4133 27.8584 36.736 27.5936C37.0587 27.3289 37.4638 27.1852 37.8812 27.1875H50.75"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.25 19.9375H50.75"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Parcele em até 24x sem juros
          </h4>
        </Box4>
      </Container2>

      {procedimentos.map((item) => (
        <Container>
          <Card key={item.id}>
            <Grid1>
              <img src={item.img1} alt={item.image_alt} />
              <img src={item.img2} alt={item.image_alt} />
              <img src={item.img3} alt={item.image_alt} />
              <img src={item.img4} alt={item.image_alt} />
            </Grid1>
            <Grid2>
              <Grid3>
                <h3>{item.produto}</h3>
                <p>{item.descricao}</p>
                <h5>
                  <span>{item.tratamento1}</span><br/>
                  <span>{item.tratamento2}</span><br/>
                  <span>{item.tratamento3}</span><br/>
                  <span>{item.tratamento4}</span><br/>
                </h5>
                  <span>*Avaliação gratuita</span><br/>                 
              </Grid3>

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
                    Quero reservar o meu produto agora!
                  </ButtomAtendimento>
                </Grid6>
            </Grid2>
            
          </Card>
          
        </Container>

              

      ))}
      <ContainerCart>
        <BoxCart1>
          <h1>Pague com</h1>
        </BoxCart1>
        <BoxCart2>
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

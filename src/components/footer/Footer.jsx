import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import {
  ByGoodApp,
  Colum,
  Container,
  Grid1,
  Grid2,
  Grid3,
  Grid4
} from "./style";
import logoImg from "../../assets/Logo.png";
/* import instagram from "../../assets/instagram.svg"; */

export function Footer() {
  return (
    <>
      <Container>
        <Colum>
          <Grid1>
            <img src={logoImg} alt="Logo" />
          </Grid1>
          <Grid2>
            <>
              <ul>
                <li>
                  <a href="home">HOME</a>
                </li>
                <li>
                  <a href="sobre">SOBRE</a>
                </li>
                <li>
                  <a href="servicos">SERVIÇOS</a>
                </li>

                <li>
                  <a href="contato">CONTATO</a>
                </li>
              </ul>

             
            </>
          </Grid2>
          <Grid3></Grid3>
          <Grid4>
            <a
              href="https://www.instagram.com/belaexpress.estetica/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <img src={instagram} alt="Instagram" /> */}

              <FaInstagram />
            </a>

            <a
              href="https://api.whatsapp.com/message/MN64IAXQPVMGO1?autoload=1&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
          </Grid4>
        </Colum>
        <ByGoodApp>
          <p>
            @jcambiental 2022 Todos os direitos reservados -{" "}
            <a
              href="https://www.goodapp.com.br"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>By Good App</strong>
            </a>
          </p>
        </ByGoodApp>
      </Container>
    </>
  );
}

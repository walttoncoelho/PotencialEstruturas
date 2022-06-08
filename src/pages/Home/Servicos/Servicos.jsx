import React from "react";
import { Container,  Card, Card1, Header } from "./style";
import { Buttom, ButtomWheit } from "../../../components/buttons/style";

export function Servicos() {
  return (
    <>
      <Header>
        <h1>
          PRINCIPAIS <strong>SERVIÇOS</strong>
        </h1>
      </Header>

      <Container>
   
          <Card>
            <img src="./images/servicos/img1.png" alt="" />
            <h4>MONTAGEM E FABRICAÇÃO DE ESTRUTURAS METÁLICAS</h4>
            <p>
              Possuímos uma ampla experiência em gerenciamento, soluções
              estruturais, cálculo, detalhamento, fabricação, transporte e
              montagem de estruturas metálicas. Atuamos na fabricação e montagem
              de coberturas das mais variadas formas, em malhas simples e
              múltiplas, para Shoppings Centers, Exposições, Hipermercados,
              Centros de Distribuitção, etc.
            </p>
            <a href="https://contate.me/potencialestruturas" 
            target="_blank" rel="noreferrer"
            >
              <ButtomWheit>Saiba Mais</ButtomWheit>
            </a>
          </Card>
        
          <Card1>
            <img src="/images/servicos/img2.png" target="_blank" alt="" />
            <h4>ENSAIO DE ULTRASOM</h4>
            <p>
              Possuímos uma ampla experiência em ensaios de ultrassom, através
              de Scanners que realiza uma inspessão remota e precisa que
              dispensa a necessidade de desligamento do equipamento.
            </p>
            <a href="https://contate.me/potencialestruturas" 
            target="_blank" rel="noreferrer">
              <Buttom>Saiba Mais</Buttom>
            </a>
          </Card1>
          <Card1>
            <img src="/images/servicos/img3.png" alt="" />
            <h4>ENSAIO VISUAL DE SOLDA</h4>
            <p>
              É considerado entre os Ensaios não Destrutivos, pois não necessita
              de destruição de materiais, e possui uma inspeção precisa e
              completa. Com este tipo de procedimento, ganha-se mais agilidade e
              segurança na fase de inspeção, reduzindo outros eventuais gastos.
            </p>
            <a href="https://contate.me/potencialestruturas" 
            target="_blank" rel="noreferrer">
              <Buttom>Saiba Mais</Buttom>
            </a>
          </Card1>
     

      
          <Card1>
            <img src="./images/servicos/img4.png" alt="" />
            <h4>
              ENSAIOS NÃO DESTRUTIVOS POR MEIO DE LÍQUIDOS PENETRANTES (LP)
            </h4>
            <p>
              Este é um método para identificar descontinuidades abertas para a
              superfície de metais sólidos não porosos. A detecção das
              descontinuidades independe do tamanho, orientação, configuração da
              descontinuidade e da estrutura interna ou composição química do
              material.
            </p>
            <a href="https://contate.me/potencialestruturas" 
            target="_blank" rel="noreferrer">
              <Buttom>Saiba Mais</Buttom>
            </a>
          </Card1>
       
   
          <Card1>
            <img src="./images/servicos/img5.png" alt="" />
            <h4>TESTES HIDROSTÁTICOS</h4>
            <p>
              {" "}
              É uma processo em que os componentes de um sistema, tais como
              tudos, vasos de pressão são testadas para a verificação de
              resistência e vazamento através do enchimento do equipamento com
              líquido pressurizado. Para tubulações da gases inflamáveis, testes
              hidrostáticos são realizados para a verificação de vazamento e de
              resistência ao aumento de pressão.
            </p>
            <a href="https://contate.me/potencialestruturas" 
            target="_blank" rel="noreferrer">
              <Buttom>Saiba Mais</Buttom>
            </a>
          </Card1>
      

       
          <Card1>
            <img src="./images/servicos/img6.png" alt="" />
            <h4>JATEAMENTO E PINTURA</h4>
            <p>
              A pintura por jateamento feita de forma eficaz requer alguns
              passos fundamentais, incluindo a preparação de materiais abrasivos
              de superfícies não pintadas, proteção pessoal e térmica de
              jateamento, garantindo uma maior durabilidade e resistência ao
              acúmulo de água, e sujeira.
            </p>
            <a href="https://contate.me/potencialestruturas" 
            target="_blank" rel="noreferrer">
              <Buttom>Saiba Mais</Buttom>
            </a>
          </Card1>
     

        
          <Card1>
            <img src="./images/servicos/img7.png" alt="" />
            <h4>MONTAGEM E FABRICAÇÃO DE TANQUES DE ARMAZENAMENTO</h4>
            <p>
              Possuímos uma ampla experiência em gerenciamento, soluções estruturais, cálculo, detalhamento, fabricação, transporte e montagem de estruturas metálicas. Nossa equipe é especializada e com ampla experiência na fabrição e montagem de estruturas desse porte.
            </p>
            <a href="https://contate.me/potencialestruturas" 
            target="_blank" rel="noreferrer">
              <Buttom>Saiba Mais</Buttom>
            </a>
          </Card1>
        

     
          <Card1>
            <img src="./images/servicos/img8.png" alt="" />
            <h4>MONTAGEM DE TUBULAÇÕES INDUSTRIAIS</h4>
            <p>
              Realizamos a montagem de Tubulação Industrial de acordo com a necessidade de cada projeto, garantindo soluções eficientes, eficazes e seguras.
              A Montagem Industrial para tubulação pode ser destinada para diverssas finalidades, tais como:

              - Linhas de produção;
              - Linhas de transportadoras
              - Linhas industriais
              - Redes elétricas
              - Equipamentos hidráulicos
              - Entre diverssos outros
            </p>
            <a href="https://contate.me/potencialestruturas" 
            target="_blank" rel="noreferrer">
              <Buttom>Saiba Mais</Buttom>
            </a>
          </Card1>
       
      </Container>
    </>
  );
}

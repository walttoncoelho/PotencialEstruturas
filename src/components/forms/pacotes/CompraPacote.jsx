import React from "react";
import { Colum1, Container } from "../style";
import { Buttom } from "../../../components/buttons/style";

export function CompraPacote() {
  return (
    <>
      <Container>
        <h2>Escolha um pacote</h2>
        <p>Escolha um pacote que mais atende a sua necessidade.</p>
        <Colum1>
          <form
            action="https://formsubmit.co/olamundoestudio@gmail.com"
            method="POST"
          >
            <div>
              <input type="hidden" name="_next" value="/PropostaSucess" />
              <h3>Pacote/Plano</h3>
              <label for="estado">Escolha um pacote</label>
              <select id="estado" name="estado">
                <option value="start">1-Start</option>
                <option value="startplus">2-Start Plus</option>
                <option value="startblog">3-Start Blog</option>
                <option value="startblogplus">4-Start Blog Plus</option>
              </select>
              <h3>Dados pessoais</h3>
              <input type="text" name="nome" placeholder="Nome Completo" />
              <input type="number" name="CPF" placeholder="CPF" />
              <input
                type="Date"
                name="idade"
                placeholder="Data de nascimento"
              />
              <h3>Dados da empresa</h3>
              <input
                type="text"
                name="nomefantasia"
                placeholder="Razão social"
              />
              <input type="number" name="CNPJ" placeholder="CNPJ" />
              <input type="text" name="email" placeholder="E-mail" />
              <input type="text" name="telefone" placeholder="Telefone" />
              <input type="cep" name="CNPJ" placeholder="CEP" />
              <input type="text" name="endereco" placeholder="Logradouro" />
              <input type="numero" name="numero" placeholder="Número" />
              <input type="text" name="complemento" placeholder="Complemento" />
              <input type="text" name="Bairro" placeholder="Bairro" />

              <label for="estado">Estado</label>
              <select id="estado" name="estado">
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>
                <option value="AP">Amapá</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceará</option>
                <option value="DF">Distrito Federal</option>
                <option value="ES">Espírito Santo</option>
                <option value="GO">Goiás</option>
                <option value="MA">Maranhão</option>
                <option value="MT">Mato Grosso</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="MG">Minas Gerais</option>
                <option value="PA">Pará</option>
                <option value="PB">Paraíba</option>
                <option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piauí</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RO">Rondônia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">São Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>
              </select>
              <input type="text" name="cidade" placeholder="Cidade" />
            </div>
            <Buttom type="submit">Enviar</Buttom>
          </form>
        </Colum1>
      </Container>
    </>
  );
}

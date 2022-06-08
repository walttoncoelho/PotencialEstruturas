import React from "react";
import { Colum1, Container, BoxButtom } from "../style";
import { Buttom } from "../../../components/buttons/style";

export function FormContato() {
  return (
    <>
      <Container>
        <h2>Entre em contato conosco</h2>
        <p>
          Envie-nos uma mensagem e entraremos em contato com você o mais breve
          possível.
        </p>
        <Colum1>
          <form
            action="https://formsubmit.co/olamundoestudio@gmail.com"
            method="POST"
          >
            <div>
              <input
                type="hidden"
                name="_next"
                value="https://goodapp.com.br/PropostaSucess"
              ></input>

              <input type="text" name="empresa" placeholder="Nome da empresa" />
              <input type="text" name="cidade" placeholder="Cidade" />
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
              <input
                type="text"
                name="solicitante"
                placeholder="Nome do solicitante"
              />
              <textarea
                type="textarea"
                name="description"
                placeholder="Descrição da mensagem"
              />

              <input type="text" name="telefone" placeholder="Telefone" />
              <input type="text" name="email" placeholder="E-mail" />
            </div>
            <BoxButtom>
            <Buttom type="submit">Enviar</Buttom>

            </BoxButtom>
          </form>
        </Colum1>
      </Container>
    </>
  );
}

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;

  margin: 0 auto;

  h2 {
    margin-top: 50px;
    margin-bottom: 15px;
    letter-spacing: 0.01em;
    color: #ffffff;
  }

  p {
    margin: 0 auto;
    margin-bottom: 20px;
    color: #ffffff;
  }

  @media (max-width: 900px) {
    max-width: 430px;
    padding: 5px;
  }
`;

export const BoxButtom = styled.div`
display: flex;

align-items: flex-end;
justify-content: flex-end;
margin-left: 90%;
`;

export const Colum1 = styled.div`
  display: flex;
  flex-direction: column;

  input {
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #dadada;
    padding: 0 10px;
    margin-bottom: 10px;
    font-size: 16px;
    color: #000;
    background-color: #fff;
  }

  h3 {
    display: flex;
    margin-left: 0%;
    margin-bottom: 15px;
    margin-top: 20px;
  }

  select {
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #dadada;
    padding: 0 10px;
    margin-bottom: 10px;
    font-size: 16px;
    color: #000;
    background-color: #fff;

  }
  textarea {
    width: 100%;
    height: 150px;
    border: 1px solid #dadada;
    border-radius: 4px;
    padding: 0 10px;
  }

  Button {
    max-width: 150px;
    &:hover {
      max-width: 160px;
    }
  }
`;

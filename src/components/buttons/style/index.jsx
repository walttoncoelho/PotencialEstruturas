import styled from "styled-components";

export const ButtomWhatsApp = styled.div`
  display: flex;

  margin: auto;
  height: 60px;
  width: 150px;
  background: #ffc700;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;

  a{
    text-decoration: none;
  }



  p {
    margin: auto;
    font-size: 12px;
    font-weight: bold;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  &:hover {
    background-color: #1dc41d;
    color: #ffffff;
    border-color: #ffffff;
    font-weight: bold;

    svg{
      stroke: #ffffff;
    }
    p{
      color: #ffffff;
    }
  }

  @media (max-width: 1200px) {
    padding: 10px;
  }

  @media (max-width: 700px) {
    margin: auto;
  }
`;


export const ButtomWhatsAppHome = styled.div`
  display: flex;

  margin: auto;
  height: 60px;
  width: 150px;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  a{
    text-decoration: none;
  }



  p {
    margin: auto;
    font-size: 12px;
    font-weight: bold;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  svg{
      stroke: #383838;
    }
    p{
      color: #383838;
    }
  

  &:hover {
  
    color: #278a00;
    border-color: #ffffff;
    font-weight: bold;

    svg{
      stroke: #278a00;
    }
    p{
      color: #278a00;
    }
  }

  @media (max-width: 1200px) {
    padding: 10px;
  }

  @media (max-width: 700px) {
    margin: auto;
  }
`;

export const Buttom = styled.button`
  display: flex;
  border: 2px solid #d12d2d;

  border-radius: 4px;
  font-size: 14px;
  justify-content: center;
  align-items: center;
  min-width: 250px;
  max-width: 250px;
  height: 50px;
  color: #d12d2d;
  margin: auto;
  padding: 50px;
  margin-bottom: 10px;

  padding: 20px;
  &:hover {
    background-color: #d12d2d;
    border-color: #d12d2d;
    font-weight: bold;
    color: #ffffff;
  }
`;

export const ButtomWheit = styled.button`
  display: flex;
  border: 2px solid #ffffff;
  background-color: #d12d2d;
  border-radius: 4px;
  font-size: 14px;
  justify-content: center;
  align-items: center;
  min-width: 250px;
  max-width: 250px;
  height: 50px;
  color: #ffffff;
  margin: auto;
  padding: 50px;
  margin-bottom: 10px;

  padding: 20px;
  &:hover {
    background-color: #ffffff;
    border-color: #d12d2d;
    font-weight: bold;
    color: #d12d2d;
  }
`;

export const ButtomAtendimento = styled.button`
  display: flex;
  border: 2px solid #328d50;
  background-color: #38aa41;
  border-radius: 4px;
  color: #8d3286;
  font-size: 14px;
  justify-content: center;
  align-items: center;
  min-width: 250px;
  max-width: 250px;
  height: 50px;
  color: #ffffff;
  margin: auto;

  padding: 20px;
  &:hover {
    background-color: #3e8000;
    border-color: #18aa3d;
    font-weight: bold;
    color: #ffffff;
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  background-color: #c92e2e;
  background-image: url(./images/banner/home/bgclientes.png);
  max-width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 2px;
  align-items: center;
  justify-content: center;
`;

export const Grid1 = styled.div`
  display: flex;
  margin: auto;
  h2 {
    color: #fff;
  }
`;

export const Grid2 = styled.div`
  max-width: 1555px;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  justify-content: center;
  align-items: center;
  
  `;

export const Card = styled.div`

  display: flex;
  max-width:150px; 
  margin: auto;
  margin-top: 20px;
  border-radius: 9px;
  margin-left: 5px;
  flex-wrap: wrap;

 
  
  img {
    display: flex;
    margin: auto;
    padding: 15px;
    width: 90%;
    margin: auto;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 700px) {
    max-width: 200px;
    max-height: 100%;
  }
`;

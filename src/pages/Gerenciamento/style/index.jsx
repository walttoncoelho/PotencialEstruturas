import styled from "styled-components";

export const Container = styled.div`
  background-color: #34b175;
  flex-direction: row;
  display: flex;
  max-width: 100%;
  margin: auto;
  position: none;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Grid1 = styled.div`

  width: 50%;
  display: flex;
  padding: 10px;
  display: flex;
  flex-direction: column;
  margin: auto;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }


`;
export const ContainerImg = styled.div`
display: flex;
flex-wrap:wrap ;
margin: auto;
align-items: center;
justify-content: center;

width: 100%;

img {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    margin: auto;
    width: 300px;
  
  }
`;

export const Grid2 = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: auto;

  p {
    color: #ffffff;
    text-align: center;
    @media (max-width: 768px) {
      align-items: center;
      justify-content: center;
      margin: auto;
    }
  }

  h1 {
    display: flex;
    color: #acfa78;
    text-align: center;
    @media (max-width: 786px) {
      display: flex;
      margin: auto;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const Grid3 = styled.div`
background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 50%;
  height: 100vh;
  
  position: static;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Card = styled.div`
  display: flex;
  max-width: 100%;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 8px;
  > img {
    max-width: 400px;
    border-radius: 4px;
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  background-color: #D12D2D;
  flex-direction: row;
  display: flex;
  max-width: 1920px;
  margin: auto;
  position: none;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;


export const Banner = styled.div`
  display: flex;
  margin: auto;
  background-image: url(./images/sobre/bgcontato.png);
  background-color: #81107253;
  max-width: 1920px;
  height: 350px;
`;

export const Title = styled.div`
  display: flex;
  padding: 30px;
  flex-direction: column;
  margin: auto;
  align-items: center;

  h3 {
    max-width: 600px;
    color: #ffffff;
  }

  @media (max-width: 680px) {
    h1 {
      font-size: 2.8rem;
    }

    h3 {
      font-size: 1.2rem;
    }
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
  flex-wrap: wrap;
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
  max-width: 900px;
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

export const Grid3 = styled.div`
  background-color: #D12D2D;
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

export const Grid4 = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 100%;
  position: static;
  @media (max-width: 768px) {
    width: 100%;
  }

  h2{
    color: aliceblue;
  }
  p{
    color: aliceblue;
  }
`;

export const Grid5 = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 100%;
  position: static;

  iframe {
    width: 600px;
    height: 600px;
    border-radius: 6px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  @media (max-width: 768px) {
    width: 100%;
    iframe {
      width: 420px;
    }
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

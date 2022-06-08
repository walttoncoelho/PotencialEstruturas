import styled from "styled-components";

export const Container = styled.div`

  flex-direction: column;
  display: flex;
  margin: auto;

`;

export const Grid1 = styled.div`

  display: flex;
  justify-content: center;
  margin: auto;

`;

export const Grid2 = styled.div`

  display: flex;
  max-width: 1530px;
  height: 100%;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  flex: 1 2 300px;

  @media (max-width: 700px) {
  }
`;

export const Card = styled.div`

  max-width: 350px;
  min-width: 350px;
  max-height: 300px;
  margin: 10px;
  left: 194px;


  border: 1px solid #d1d1d1;
  box-sizing: border-box;
  box-shadow: 0 1px 2px rgb(0 0 0 / 6%), 0 1px 3px rgb(0 0 0 / 10%);
  border-radius: 20px;
  flex: 1 1 150px;

  &:hover {
    background: #f8f8f8;
    font-weight: bold;
    box-shadow: 0 0 0px 8px rgb(0 1 0 / 22%), 0 1px 3px rgb(0 0 0 / 20%);
  }

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    padding: 20px;
    text-align: center;
  }

  img {
    margin-left: 33%;
    margin-top: 10px;
  }

  @media (max-width: 700px) {
    max-width: 100%;

    img {
      display: flex;
      margin: auto;
      padding: 5px;
    }
  }
`;

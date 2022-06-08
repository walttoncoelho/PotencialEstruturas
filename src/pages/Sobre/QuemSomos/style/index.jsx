import styled from "styled-components";

export const Container = styled.div`

  margin: auto;
  padding: 10px;
  max-width: 1440px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;

  h1 {
    font-weight: 200;
    text-align: center;

    @media (max-width: 680px) {
      padding: 10px;
      font-size: 2.8rem;
    }
  }

  @media (max-width: 680px) {
    position: relative;
    height: 100%;
  }
`;

export const Grid1 = styled.div`
  background-color: #d12d2d;
  border-radius: 6px; 
  min-width: 48%;
  min-height: 340px;
  display: flex;
  margin: auto; 
  flex-wrap: wrap;
  margin: auto;
  padding: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  margin-bottom: 5px;
  align-items: center;
  justify-content: center;
  margin-left: 2px;
  margin-right: 2px;

  h1 {
    font-size: 2rem;
    color: #fff;
    font-weight: bold;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    max-width: 300px;
    text-align: center;
    line-height: 35px;
  }
  p {
    font-size: 0.8rem;
    color: #fff;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 1em;
    font-weight: 300;
    max-width: 300px;
    width: 260px;
  }

  img {
    width: 30px;
    display: flex;
    margin: auto;
    margin-top: 10px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    min-width: 100%;
    margin: auto;
    padding: 5px;

    margin-bottom: 5px;

    p {
      font-size: 1.5em;
      font-weight: 300;
      width: 260px;
    }
  }
`;

export const Grid2 = styled.div`
  background-color: #f8f8f8; 
  display: flex;
  width: 48%;
  min-height: 340px;
  margin: auto;  
  padding: 5px; 
  border-radius: 6px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 5px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  margin-left: 2px;
  margin-right: 2px;
  h1 {
    font-size: 2rem;
    color: #d12d2d;
    font-weight: bold;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  p {
    color: #313131;

    margin: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 1em;
    font-weight: 300;
    max-width: 300px;
    width: 260px;
  }

  img {
    width: 30px;
    display: flex;
    margin: auto;
    margin-top: 10px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    min-width: 100%;
    margin: auto;
    padding: 5px;

    margin-bottom: 5px;

    p {
      font-size: 1.5em;
      font-weight: 300;
    }
  }
`;

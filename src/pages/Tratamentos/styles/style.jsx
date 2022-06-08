import styled from "styled-components";

export const Banner = styled.div`
  display: flex;
  margin: auto;
  background-image: url(./images/tratamentos/banner.png);
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
  h1 {
    color: #ffffff;
  }

  h3 {
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

export const Container = styled.div`
  background-color: #efefef;
  display: flex;
  margin: auto;
  flex-direction: row;
  max-width: 1920px;
  min-height: 500px;
  margin-bottom: 10px;

  @media (max-width: 1200px) {
    
    border: 1px solid #944380;
    margin-bottom: 10px;
    width: 98%;
    border-radius: 9px;
    margin-top: 10px;

  }

  @media (max-width: 680px) {
    flex-direction: column;

  }
`;

export const Grid1 = styled.div`
  display: flex;
  margin: auto;
  width: 50%;
  min-height: 250px;
  padding: 10px;
  align-items: center;
  justify-content: center;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  @media (max-width: 680px) {
    width: 100%;
  }

  img {
    display: flex;
    margin: auto;
    width: 100%;
    border-radius: 4px;

    @media (max-width: 680px) {
      min-width: 350px;
      height: 100%;
    }
  }
`;

export const Grid2 = styled.div`
  display: flex;
  margin: auto;
  width: 50%;
  flex-direction: column;
  min-height: 250px;

  @media (max-width: 680px) {
    width: 100%;
    padding: 10px;
    
  }
`;

export const Grid3 = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 100%;
  min-height: 250px;
  padding: 30px;

  @media (max-width: 680px) {
    padding: 1px;
    
  }

`;

export const Grid4 = styled.div` 
  display: flex;
  margin: auto;
  width: 100%;
  flex-direction: row;
  min-height: 250px;

  @media (max-width: 1200px) {    
    flex-direction: column;
  }
`;

export const Grid5 = styled.div`
  display: flex;
  margin: auto;
  width: 50%;
  flex-direction: column;
  min-height: 150px;

  @media (max-width: 1200px) {
    flex-direction: row;
    width: 100%;
    padding: 10px;
   
  }
`;

export const Grid6 = styled.div` 
  display: flex;
  margin: auto;
  width: 50%;
  flex-direction: column;
  min-height: 150px;

  @media (max-width: 1200px) {
    flex-direction: column;
    width: 100%;
    padding: 10px;
   
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  width: 100%;
  max-width: 330px;
  min-height: 90px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 2px solid #b17aac;

  h4 {   
    
    font-size: 20px;
    display: flex;
    margin: auto;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 1200px) {
    width: 100%;
    height: 150px;
    padding: 10px;
    margin-left: 5px;
   
  }
`;

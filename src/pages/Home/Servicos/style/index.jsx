import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  max-width: 1920px;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 50px;
  align-items: center;
  justify-content: center;
  text-align: center;

  h1 {
    font-weight: 200;

    @media (max-width: 680px) {
      padding: 10px;
      font-size: 2.8rem;
    }
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1440px;
  margin: auto;
  padding: 10px;
  justify-content: center;
  flex-wrap: wrap;

 
  @media (max-width: 680px) {
    
  }

  @media (max-width: 1200px) {
   
  }
`;



export const Card = styled.div`
  background-color: #D12D2D;
  flex-direction: column;
 
  min-width: 340px;
  max-width: 340px;
  min-height: 600px;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  margin-bottom: 10px;
  border-radius: 4px;
  margin-right: 5px;
  margin-left: 2px;
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.15);
 
  a {
    text-decoration: none;
  }



  @media (max-width: 680px) {
    min-width: 100%;
  }

  h4 {
    font-weight: bold;
    margin: auto;
    margin-bottom: 10px;
    max-width: 310px;
    color: #fff;
  }
  p {
    font-size: 1rem;
    max-width: 300px;
    margin: auto;
    margin-bottom: 10px;
    padding: 10px;
    color: #fff;
  }
  img {
    display: flex;    
    max-width: 100%;
  }
`;

export const Card1 = styled.div`
  background-color: #f4f4f4;
  flex-direction: column;
  min-width: 340px;
  max-width: 340px;
  min-height: 670px;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  margin-bottom: 10px;
  border-radius: 4px;
  margin-right: 5px;
  margin-left: 2px;
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.15);


  a {
    text-decoration: none;
  }



  @media (max-width: 680px) {
    min-width: 100%;
  }

  h4 {
    font-weight: bold;
    margin: auto;
    margin-bottom: 10px;
    max-width: 310px;
  }
  p {
    font-size: 1rem;
    margin: auto;
    margin-bottom: 10px;
    padding: 10px;
    max-width: 300px;
  }
  img {
    display: flex;    
    max-width: 100%;

  }
`;

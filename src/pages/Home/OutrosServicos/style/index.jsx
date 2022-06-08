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
    flex-wrap: wrap;
  }

  @media (max-width: 1200px) {
    flex-wrap: wrap;
  }
`;



export const Card = styled.div`
  flex-direction: column; 
  min-width: 350px;
  max-width: 350px;
  max-height: 180px;
  min-height: 180px;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  margin-bottom: 10px;
  border-radius: 4px;
  margin-right: 5px;
  margin-left: 2px;
  padding: 10px;
  border: 2px solid #D12D2D;

  align-items: center;
  justify-content: center;
  /*    flex: 1 2 3 300px; */
  


  @media (max-width: 1200px) {
    width: 25%;
    
    flex-wrap: wrap;
  }

  @media (max-width: 680px) {
    width: 100%;
    padding: 10px;
    flex-wrap: wrap;
  }
`;

export const CardWhats = styled.div`
  flex-direction: column; 
  min-width: 350px;
  max-width: 350px;
  max-height: 180px;
  min-height: 180px;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  margin-bottom: 10px;
  border-radius: 4px;
  margin-right: 5px;
  margin-left: 2px;
  padding: 10px;
  border: 2px solid #f5dd02;

  align-items: center;
  justify-content: center;
  /*    flex: 1 2 3 300px; */
  


  @media (max-width: 1200px) {
    width: 25%;
    
    flex-wrap: wrap;
  }

  @media (max-width: 680px) {
    width: 100%;
    padding: 10px;
    flex-wrap: wrap;
  }
`;

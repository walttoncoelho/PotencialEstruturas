import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  max-width: 1920px;
  margin: auto;
  padding: 10px;
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
  max-width: 1920px;
  margin: auto;
  padding: 10px;
`;

export const Grid = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
  max-width: 1500px;  

  @media (max-width: 1200px) {
    flex-wrap: wrap;
  }
`;

export const Grid1 = styled.div`
  flex-direction: column;
  display: flex;
  width: 100%;
  margin: auto;
  margin-bottom: 10px;
  border-radius: 4px;
  margin-right: 5px;
  margin-left: 2px;
  padding: 10px;
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.15); 

  @media (max-width: 1200px) {
    width: 50%;
    flex-wrap: wrap;
  }

  @media (max-width: 680px) {
    width: 100%;
  }

  h4 {
    font-weight: bold;
    margin: auto;
    margin-bottom: 0px;
    margin-top: 20px;
  }
  p {
    font-size: 0.8rem;
    margin: auto;
    margin-bottom: 10px;
    padding: 10px;
    
  }

  img {
    display: flex;
    margin: auto;
    padding: 5px;
    width: 270px;
    height: 270px;
    margin-bottom: 10px;
    box-shadow: 0px 1px 3px 5px rgba(0, 0, 0, 0.15);
  }
`;

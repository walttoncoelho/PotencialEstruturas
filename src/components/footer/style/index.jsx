import styled from "styled-components";

export const Container = styled.div`
  border-top: 6px solid #741e1e;
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  background-color: #3D3D3C;
`;

export const Colum = styled.div`

  color: #fff;
  display: flex;
  width: 1440px;
  max-width: 1200px;
  flex-direction: row;
  padding: 10px;

  p {
    margin-bottom: 8px;
  }
`;

export const Grid1 = styled.div`

  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 50px;

  img {
    width: 30%;
    margin: auto;
  }

  @media screen {
    max-width: 700px;
    width: 80%;
    margin: auto;
  }
`;

export const Grid2 = styled.div`

  display: flex;
  width: 100%;

  
  ul {  
    display: flex;
    flex-direction: row;
    list-style-type: none;
    margin: 20px;    
    padding: 0;
    overflow: hidden;
    flex-wrap: wrap;
    max-width: 150px;
    min-width: 150px;
  }

  li a {
    color: #fff;
    text-align: center;
    text-decoration: none;
    font-size: 14px;
    width: 150px;
    margin: 20px;
  }
  li a:hover {
    border-radius: 5px;
    color: #ffffff;
    padding: 10px;
    font-size: 16px;
    font-weight: bold;
    
  }
`;

export const Grid3 = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 10px;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  li a {
    color: #db7575;
    text-align: center;
    text-decoration: none;
    font-size: 14px;
  }

  li a:hover {
    border-radius: 5px;
    color: #8b0000;
    padding: 10px;
    font-weight: bold;
  }
`;

export const Grid4 = styled.div`
  display: flex;
  margin: auto;

  img {
    width: 35px;
    height: 35px;
    margin: auto;
    margin: 0 15px;
  }



  a {

 
    svg{
      width: 30px;
      height: 30px;
      fill: #ffffff;
      margin-left: 10px;
    }
  }
`;

export const ByGoodApp = styled.div`
  margin: auto;
  display: flex;
  background-color: #242424;
  width: 100%;
  height: 35px;

  a {
    text-decoration: none;
  }

  p {
    color: #fff;
    align-items: center;
    justify-content: center;
    margin: auto;
    font-size: 12px;
    text-decoration: none;
  }

  strong {
    color: #fff;
    text-decoration: none;   
  }
`;

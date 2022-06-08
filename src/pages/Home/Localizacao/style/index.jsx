import styled from "styled-components";

export const Container = styled.div`

  border-radius: 4px;
  display: flex;
  max-width: 1920px;
  max-height: 600px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: auto;
  flex: wrap;
`;

export const Grid1 = styled.div`
background-color: #B17AAC;
  flex-direction: column;
  display: flex;
  width: 50%;
  min-height: 300px;
 
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: auto;
  flex: 1 2 500px;

  padding: 5px;
  margin-right: 2px;
 
  svg {
    display: flex;
    margin: auto;   
    width: 60px;
    height:60px;
    stroke: #ffffff;
  }

  
  @media (max-width: 700px) {
    order: 2;

    p{
      width: 350px;
      text-align: center;
      margin-top: -10px;
    }
  }

  p {
    display: flex;
    padding: 30px;
    color: #fff;
    margin: auto;
    text-align: center;
    
  }
  h2{  
    display: flex;
    margin: auto;
    color: #fff;   
  }

`;

export const Grid2 = styled.div`
  display: flex;
  width: 50%;
  height: 300px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: auto;
  flex: 1 2 500px;

  padding: 5px;

  @media (max-width: 700px) {
    order: 2;
  }

  p {
    padding: 30px;
    color: #ffff;
  }
  h2{
   
  }

  iframe {
    width: 100%;
    height: 100%;
  }
`;

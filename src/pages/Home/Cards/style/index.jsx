import styled from "styled-components";

export const Container = styled.div`
  background-image: url(../images/banner/home/bgdestaque.png);
  padding: 10px;
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

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

/* export const ContainerBox = styled.div`
  display: flex;
  width: 100%;
  background-color: #169b9b;
  flex-wrap: wrap;
  position: relative;
 
`; */

export const Header = styled.div`
  display: flex;

  h1 {
    font-weight: 200;

    @media (max-width: 680px) {
      padding: 10px;
      font-size: 2.8rem;
    }
  }
`;

export const Grid = styled.div`
  display: flex;
  margin: auto;
  padding: 10px;
  max-width: 1900px;
  flex-wrap: wrap;
  margin-bottom: 5px;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
   
    
  
  
  }
`;

export const Grid1 = styled.div`
  background-color: #d12d2d;
  border-radius: 6px;
  flex-direction: column; 
  min-width: 300px;
  max-width: 300px;
  min-height: 340px;
  display: flex;
  margin: auto;
  margin-left: 5px;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  padding: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  margin-bottom: 5px;

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
  flex-direction: column;
  display: flex;
  max-width: 300px;
  min-width: 300px;
  min-height: 340px;
  margin: auto;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  padding: 5px;
  margin-left: 5px;
  border-radius: 6px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 5px;

  border-radius: 6px;
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

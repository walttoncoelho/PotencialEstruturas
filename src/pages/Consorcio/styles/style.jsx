import styled from "styled-components";

export const Banner = styled.div`
  display: flex;
  margin: auto;

  background-image: url(./images/produtos/capaconsorcio.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  max-width: 1920px;
  height: 300px;
  margin-bottom: 10px;
  @media (max-width: 680px) {
    flex-direction: column;
  }
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
  background-color: #c273ae;
  display: flex;
  margin: auto;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 1200px;
`;

export const Card = styled.div`
  background-color: #efefef;
  display: flex;
  margin: auto;
  flex-direction: row;

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
  flex-direction: row;
  width: 50%;
  height: 100%;
  flex-wrap: wrap;
  padding: 10px;

  @media (max-width: 680px) {
    width: 100%;
    height: 35%;
  }

  img {
    display: flex;
    margin: auto;
    max-width: 250px;
    border-radius: 4px;
    padding: 3px;
    filter: drop-shadow(2px 3px 2px rgba(0, 0, 0, 0.3));
    border-radius: 9px;
    border: 1px solid #58064430;
    margin-bottom: 4px;

    @media (max-width: 680px) {
      max-width: 48%;
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
  min-height: 180px;
  padding: 30px;

  @media (max-width: 680px) {
    padding: 1px;
    min-height: 150px;
  }

  h5 {
    color: #944380;
  }
`;

export const Grid4 = styled.div`
  display: flex;
  margin: auto;
  width: 100%;
  flex-direction: row;
  min-height: 180px;

  @media (max-width: 1200px) {
    flex-direction: column;
    min-height: 100px;
  }
`;

export const Grid5 = styled.div`
  display: flex;
  margin: auto;
  width: 80%;
  flex-direction: row;
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

export const Box1 = styled.div`
  display: flex;
  margin: auto;
  text-align: center;
  h1 {
    padding: 20px;
    font-size: 2.8rem;
    font-weight: 200;
    color: #5e1454;

    @media (max-width: 680px) {
      color: #ffffff;
    }
  }
`;

export const Box2 = styled.div`
  width: 100%;

  img {
    display: flex;
    margin: auto;

    @media (max-width: 680px) {
      width: 90%;
      flex-direction: column;
      border-radius: 6px;
    }
  }
`;

export const ContainerCart = styled.div`
  display: flex;
  margin: auto;
  max-width: 1920px;
  flex-direction: column;
  
`;

export const BoxCart1 = styled.div`
  display: flex;
  margin: auto;
  flex-direction: row;

  h1 {
    font-size: 2.8rem;
    font-weight: 200;
  }
`;

export const BoxCart2 = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
  max-width: 1200px;
  flex-wrap: wrap;

  @media (max-width: 1200px) {
    flex-wrap: wrap;
  }
`;

export const Cartd = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
  padding: 5px;
  max-width: 200px;
  height: 200px;

  @media (max-width: 1200px) {
    flex-wrap: wrap;
  }

  img {
    flex-wrap: wrap;
    display: flex;
    margin: auto;
    width: 60%;
  }
`;

export const Container2 = styled.div`
  display: flex;
  margin: auto;
  max-width: 1220px;
  padding: 10px;
`;

export const Box3 = styled.div`
  display: flex;
  background-color: #8d3286;
  width: 50%;
  height: 150px;
  margin: auto;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h4 {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    display: flex;
    margin: auto;
    color: #ffffff;
    padding: 20px;
    max-width: 550px;
    font-weight: 300;
    line-height: 30px;

    @media (max-width: 680px) {
      font-size: 1rem;
    }

    svg {
      width: 50px;
      height: 50px;
    }
  }
`;

export const Box4 = styled.div`
  display: flex;
  background-color: #9f5699;
  width: 50%;
  height: 150px;
  margin: auto;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h4 {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    display: flex;
    margin: auto;
    color: #ffffff;
    padding: 20px;
    max-width: 550px;
    font-weight: 300;
    line-height: 30px;

    @media (max-width: 680px) {
      font-size: 1rem;
    }

    svg {
      width: 50px;
      height: 50px;
    }
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 330px;
  min-height: 120px;
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

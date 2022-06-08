import styled from "styled-components";

export const AcordionSection = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1920px; 
  margin: auto;

  h2 {
    font-size: 2rem;    
  }
`;

export const FiChevronUp = styled.div`
  background-color: #B17AAC;  
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1900px;   
  margin: auto;
  margin-bottom: 20px;
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1900px;
  cursor: pointer;
`;

export const Dropdown = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 900px;
  min-width: 350px;
  margin: auto;
  background-color: #B17AAC;  
  border-radius: 4px;
  border: 1px solid #eeeeee;
  cursor: pointer;
  text-decoration: none;
  box-shadow: rgb(0 0 0 / 1%) 0px 2px 1px, rgb(8 9 3 / 6%) 0px 3px 9px;
  @media (max-width: 1200px) {
    width: 800px;

  }

  @media (max-width: 780px) {
    width: 450px;

  }

  

  &:hover {
    box-shadow: rgb(0 0 0 / 15%) 0px 2px 6px, rgb(8 9 3 / 10%) 0px 3px 9px;
  }

  p {
    background-color: #ebebeb;
    width: 100%;
    margin: auto;
    align-items: flex-end;
    font-size: 1rem;
    color: #373737;
    padding: 10px;
  }

  h5 {
    color: #ffffff;
    width: 100%;
    height: 100%;
    margin: auto;
    align-items: flex-end;
    text-decoration: none;

    padding: 10px;
  }

  img {
    display: flex;
    width: 150px;
    height: auto;
    margin: auto;
    align-items: flex-end;
    padding: 30px;
    margin: auto;
  }
`;

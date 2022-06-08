import styled from "styled-components";

export const Background = styled.div`
  background: ${(props) => props.color};
`;

export const Tipograf = styled.div`
  h1 {
    font-style: normal;
    font-weight: 300;
    font-size: 3em;
    line-height: 64px;
    letter-spacing: 0.01em;
    color: #D12D2D;
    font-weight: 900;
   
   
    font-size: 4em;
    margin-top: 50px;
    font-family: 'Inter', sans-serif;
  }


  h2 {
    text-align: center;
    color: #D12D2D;
    font-weight: 200;
    line-height: 50px;
    
    font-size: 2.55em;
    margin-top: 50px;
    font-family: 'Inter', sans-serif;
  }

  h3 {
    text-align: center;
    color: #D12D2D;
    font-weight: 300;
    line-height: 35px;
    font-size: 2.2em;
    font-family: 'Inter', sans-serif;
  }

  h4 {
    text-align: center;
    color: #D12D2D;
    font-weight: 700;
    line-height: 25px;
    font-size: 1.5em;
    font-family: 'Inter', sans-serif;
  }

  h5 {
    text-align: center;
    color: #363636;
    font-weight: 700;
    line-height: 25px;
    font-size: 1em;
    font-family: 'Inter', sans-serif;
  }

  p {
    color: #2f2f2f;
    font-size: 1em;
    font-weight: 300;
    font-family: 'Inter', sans-serif;
  }

  strong {
    font-size: 1em;
    text-align: center;
    font-weight: 600;
    color: #D12D2D;
  }
`;

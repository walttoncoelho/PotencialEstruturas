import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: row;
margin: auto;
max-width: 1440px;
background-color: aquamarine;
align-items:center;
justify-content: center;

 
`;

export const Box = styled.div`
width: 50%;
height: 460px;
display: flex;
margin: auto;
background-color: #D12D2D;
align-items:center;
justify-content: center;

h2{
  font-weight: 200;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #ffffff;
  width: 400px;

}
 
`;

export const Img = styled.div`
width: 50%;
height: 460px;




display: flex;
margin: auto;
img {
  width: 100%;

  border-radius: 9px;
}

 
`;


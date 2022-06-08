import styled from "styled-components";

export const Banner = styled.div`
background-color: #722064;
background-image: url(./images/sobre/bgsobre.png);
display: flex;
margin: auto;
flex-direction: row;
max-width: 1920px;
height: 350px;

@media (max-width: 1200px) {
    flex-wrap: wrap;
    flex-direction: column;
    height: 100%;    
  }
`;

export const Grid1 = styled.div`
display: flex;
justify-content: center;
width: 30%;
flex-direction: row;
margin: auto;

img {
    display: flex;    
    margin: auto;
    width: 100%;
    max-width: 200px;
}

`;
export const Grid2 = styled.div`
display: flex;
margin: auto;
text-align: center;
justify-content: center;
width: 60%;

@media (max-width: 1200px) {
    h2{
        font-size: 24px;
        width: 80%;
    }    
  }

h2 {
    color: #fff;
    max-width: 700px;
}
`;
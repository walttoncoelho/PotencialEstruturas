import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  max-width: 1530px;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
`;

export const Header = styled.div`
  max-width: 900px;
  display: flex;
  align-items: center;
  margin: auto;
`;

export const Grid1 = styled.div`  
  max-width: 350px;
  min-width: 350px;
  max-height: 570px;
  margin: 10px;
  left: 194px;
  top: 853px;
  background: #ffff;
  border: 1px solid #d1d1d1;
  box-sizing: border-box;
  box-shadow: 0 1px 2px rgb(0 0 0 / 6%), 0 1px 3px rgb(0 0 0 / 10%);
  border-radius: 20px;
  flex: 1 1 150px;

  &:hover {
    background: #f8f8f8;
    font-weight: bold;
    box-shadow: 0 0 0px 8px rgb(0 1 0 / 22%), 0 1px 3px rgb(0 0 0 / 20%);
  }

  h3 {
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 10px;
    font-style: normal;
    font-weight: bold;
    line-height: 21px;
    color: #2B43BD;
  }

  h2 {
    font-style: normal;
    line-height: 50px;
    font-weight: 600;
    color: #2B43BD;
  }

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    padding: 20px;   
    text-align: center;
  }

  h4 {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
    padding: 10px;  
  
  }

  img {
   
    margin-left: 33%;
    margin-top: 10px;
  }
`;

export const BoxYelow = styled.div`
  background-color: #FFB800;
  width: 100%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  padding: 10px;
  font-style: normal;
  font-weight: bold;
  line-height: 21px;
  color: #ffff;
`;

export const BoxGreen = styled.div`
  background-color: #15A54F;
  width: 100%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  padding: 10px;
  font-style: normal;
  font-weight: bold;
  line-height: 21px;
  color: #ffff;
`;

export const BoxBlue = styled.div`
  background-color: #2B43BD;
  width: 100%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  padding: 10px;
  font-style: normal;
  font-weight: bold;
  line-height: 21px;
  color: #ffff;
`;

export const Circle = styled.div`
  width: 40px;
  height: 40px;
  left: 233px;
  top: 940px;
  border-radius: 100%;
  background: #2b43bd;
  display: flex;
  margin: 5px;
  margin-bottom: 10px;

  p {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #ffffff;
    text-align: center;
    justify-content: center;
    margin: auto;
    align-items: center;
  }
`;

export const TitleBold = styled.div`
  width: 900px;
  margin: auto;
  margin-bottom: 20px;
  h1 {
    font-style: normal;
    font-weight: 100;
    font-size: 45px;
    line-height: 64px;
    letter-spacing: 0.02em;
    color: #2b43bd;
  }
`;

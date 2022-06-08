import styled from "styled-components";

export const Header = styled.div`
  background-color: #8d0000;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: auto;

  @media (max-width: 768px) {
  }
`;

export const Banner = styled.div`
display: flex;
margin: auto;
width: 100%;


image {
  display: flex;
  margin: auto;
  max-width: 1920px;
  height: 100%;
  align-items: center;
  justify-content: center;

}



`;

export const Slide = styled.div`
  opacity: 0;
  transition-duration: 1s ease;

  &.active {
    opacity: 0;
    opacity: 1;
    /* transition-duration: 1s;
    transform: scale (1.08); */
  }
`;

export const ArrowLeft = styled.div`
  position: absolute;
  top: 50%;
  right: 32px;
  font-size: 3rem;
  color: #000;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`;

export const ArrowRight = styled.div`
  position: absolute;
  top: 50%;
  left: 32px;
  font-size: 3rem;
  color: #000;
  z-index: 9;
  cursor: pointer;
  user-select: none;
`;

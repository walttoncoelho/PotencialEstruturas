import styled from "styled-components";

export const Container = styled.nav`
  position: relative;
`;

export const Logo = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-left: 30px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const Grid = styled.div`
  background: linear-gradient(to right, #3d3d3c, #3d3d3c, #e01717, #2c2c2c);
  display: flex;
  margin: auto;

  position: relative;
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  > img {
    width: 100px;
    padding: 10px;
    margin-left: 25px;
  }
`;

export const Grid1 = styled.nav`
  display: flex;
  width: 100%;
  align-items: flex-start;

  @media (max-width: 700px) {
    width: 100%;
  }

  section {
    display: flex;
    margin: auto;
    gap: 2rem;
    &:last-child {
      gap: 1rem;
    }

    img {
      width: 30px;
      @media (max-width: 700px) {
        width: 20px;
      }
    }

    > nav {
      display: flex;
      margin: auto;
      display: flex;
      height: 60px;

      @media (max-width: 700px) {
        display: none;
      }

      /* Menu Principal */
      ul {
        width: 100%;
        margin: auto;
        border-radius: 5px;

        li {
          display: inline-block;

          svg {
            width: 25px;
            height: 25px;
            stroke: #ffffff;
            fill: none;
            margin: auto;
            text-align: center;
          }

          a {
            width: 100%;
            margin: auto;
            text-align: center;
            display: flex;
            text-decoration: none;
            padding: 10px;

            p {
              color: #ffffff;
              margin: auto;
              font-size: 0.8rem;
              font-weight: bold;
              transition: 0.2s;
            }

            :hover {
              svg {
                transform: scale(1.1);
                transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.3s;
                fill: none;
                stroke: #ffffff;
                color: #e9e9e9;
                width: 50px;
              }
              p {
                color: #e9e9e9;
              }
            }

            &:hover {
              width: 100%;
              height: 50px;
              display: flex;
              color: #ffffff;
              background-color: #a01010;
              border-radius: 500px;
              border: none;
              padding: 5;
              transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.3s;
            }
          }
          /* submenu */

          ul {
            display: none;
            background-color: #34bd7d;
          }
          &:hover ul {
            position: absolute;
            width: 300px;
            margin: auto;
            display: flex;
            flex-direction: column;
            border-radius: 4px;
            /* Adicionar um Popup */
            background-color: #34bd7d;
            box-shadow: 0px 0px 10px #037432;
            z-index: 1;
            transition: 0.2s;
            /* padding: 10px; */

            margin-left: -100px;
            margin-right: 10px;
            margin-bottom: 10px;
            &:hover {
              background-color: #34bd7d;
            }
          }

          li {
            margin: auto;
            display: flex;
            width: 100%;
            background-color: #faf6f1;
            border: solid 1px #f3f3f3;

            a {
              color: #087741;
              font-size: 13px;
              align-items: center;

              :hover {
                color: #ececec;
              }
            }
          }
        }
      }
      .mobile {
        display: none;
        a {
          text-decoration: none;
          color: #fff;
        }
      }

      @media (max-width: 900px) {
        .mobile {
          display: initial;
        }
        > nav {
          display: none;
        }
      }

      font-size: 18px;
      position: relative;
      text-decoration: none;
      align-items: center;
      color: #fff;

      @media (max-width: 700px) {
        padding: 14.5px 16px;
        font-size: 20px;
        position: relative;
        text-decoration: none;
        align-items: center;
        color: #fff;
        background-color: #8d3286;
      }

      @media (max-width: 900px) {
        padding: 14.5px 16px;
        font-size: 20px;
        position: relative;
        text-decoration: none;
        align-items: center;
        color: #fff;
        background-color: #e9e9e9;
      }
    }
  }
`;

export const Grid2 = styled.div`
  display: flex;
  margin: auto;
  font-size: 18px;
  text-decoration: none;
  color: #fff;

  a {
    display: flex;
    margin: auto;
  }

  svg {
    width: 25px;
    margin-left: 5px;
    stroke: #d41010;
  }
`;

export const Hamburger = styled.div`
  width: 40px;
  height: 40px;
  padding: 10px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  cursor: pointer;
  margin-left: 10px;

  svg {
    width: 25px;
    height: 25px;
    stroke: #ff0000;
    fill: #ff0000;
  }
`;

export const SubLogo = styled.div`
  display: flex;
  margin: auto;
  img {
    width: 90%;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

export const Grid3 = styled.div`
  position: fixed;
  background-color: #110707;
  align-items: flex-end;
  margin: auto;

  @media (max-width: 700px) {
    padding: 14.5px 16px;
    font-size: 20px;
    position: relative;
    text-decoration: none;
    align-items: center;
    color: #fff;
  }

  @media (max-width: 700px) {
    order: 2;
  }
`;

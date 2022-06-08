/* eslint-disable jsx-a11y/anchor-is-valid */
import { Container } from "./styles";
import { IoClose } from "react-icons/io5";
import { useEffect } from "react";

export function MenuMobile({ menuIsVisible, setMenuIsVisible }) {
  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? "hidden" : "auto";
  }, [menuIsVisible]);

  return (
    <Container isVisible={menuIsVisible}>
      <IoClose size={45} onClick={() => setMenuIsVisible(false)} />
      <nav>
        <a href="home">HOME</a>

        <a href="sobre">SOBRE</a>

        <a href="servicos">SERVIÇOS</a>

        
        <a href="contato">CONTATO</a>


      </nav>
    </Container>
  );
}

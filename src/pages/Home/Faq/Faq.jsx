import React, { useState } from "react";
import { AcordionSection, CardStyle, Container, Wrap, Dropdown } from "./Style";
import { Data } from "./Data";
import { IconContext } from "react-icons";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export function Faq(props) {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#ffffff", size: "1.5rem", padding:"10px" }}>
        <AcordionSection>
          <h2>{props.title}</h2>

          <Container>
            {Data.map((item, index) => (
              <CardStyle key={index}>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <h5>{item.question}</h5>
                  <span>{clicked === index ? <FiChevronUp /> : <FiChevronDown />}</span>
                </Wrap>
                {clicked === index && (
                  <Dropdown>
                    <p>{item.answer}</p>
                  </Dropdown>
                )}
              </CardStyle>
            ))}
          </Container>
        </AcordionSection>
      </IconContext.Provider>
    </>
  );
}

import React from "react";
import { Cards } from "../Cards/Cards";


import { Header, Banner } from "./style";

import { CarrouselContainer } from "../../../components/Carrousel/CarrouselContainer";

export function BannerTopo() {
  return (
    <>
      <Header>
        <Banner>  
          <CarrouselContainer />

       
        </Banner>     
        <Cards/> 
      </Header>
    </>
  );
}

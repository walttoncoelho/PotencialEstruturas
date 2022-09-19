import React from 'react'
import { Box, Container } from './Style'
import Not from '../../assets/suspenso/not.png'

export default function Suspenso() {
  return (
    <>
    <Container>
      <Box>

<img className="Logo" src={Not} alt='imagem-logo' />


      
    <h2>
      Serviço suspenso temporariamente
    </h2>
    <p>Contacte o adminstrador de <br/>hospedagem do seu site.</p>
      </Box>
    </Container>
    </>
  )
}

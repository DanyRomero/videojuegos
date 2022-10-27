import { Container, Typography } from '@mui/material'
import React from 'react'
import FormularioVideojuego from '../components/FormularioVideojuego'

const Videojuegos = () => {


  
  return (
    <Container>
      <Typography my={4} variant="h4" color="text.secondary">
        <strong>Videojuegos</strong>
      </Typography>
      <Typography my={4} variant="h6" color="text.secondary">
        Agregar nuevo videojuego
      </Typography>
      <FormularioVideojuego />
    </Container>
  )
}

export default Videojuegos
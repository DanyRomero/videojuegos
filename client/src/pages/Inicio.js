import React from 'react'
import { Container, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FormularioVideojuego from "../components/FormularioVideojuego"

const Inicio = () => {
  return (
    <Container>
      <Typography my={4} variant="h4" color="text.secondary">
        <strong>Videojuegos</strong>
      </Typography>
      <Grid container>
        <Grid item md={6}>
          <Typography my={2} variant="h6" color="text.secondary">Agrega un videojuego</Typography>
          <FormularioVideojuego />
        </Grid>
        <Grid item md={6}>
          <Typography my={2} variant="h6" color="text.secondary">Videojuegos</Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Inicio
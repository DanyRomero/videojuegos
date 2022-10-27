import React from 'react'
import { Container, Typography } from "@mui/material";

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Inicio = () => {
  return (
    <Container>
      <Typography my={4} variant="h4" color="text.secondary">
        <strong>Videojuegos</strong>
      </Typography>
      <Grid container>
        <Grid item>
          <Typography my={2} variant="h6" color="text.secondary">Agrega un videojuego</Typography>
        </Grid>
        <Grid item></Grid>
      </Grid>
    </Container>
  )
}

export default Inicio
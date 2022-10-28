import React, { useEffect, useState } from "react";
import { Button, Card, Container, Grid, Typography } from "@mui/material";
import axios from "axios";
import ListaVideojuegos from "../components/ListaVideojuegos";

import { Link } from "react-router-dom";
import BuscarNombre from "../components/BuscarNombre";

const Inicio = () => {
  const [videojuegos, setVideojuegos] = useState([]);
  const [filtroNombre, setFiltroNombre] = useState("")

  const fetchVideojuegos = () => {
    axios
      .get("http://localhost:5005/videojuegos")
      .then((response) => {
        setVideojuegos(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchVideojuegos();
  }, []);

  const filtradoNombre = (e) =>{
    setFiltroNombre(e.target.value)
  }

  return (
    <Container>
      <Grid
        container
        sx={{
          display: "flex",
          marginTop: "25px",
          justifyContent: "space-between",
        }}
      >
        <Grid item>
          <Typography variant="h4" color="text.secondary">
            <strong>Videojuegos</strong>
          </Typography>
        </Grid>
        <Grid item>
          <Button
            component={Link}
            to="/videojuegos"
            variant="contained"
            size="small"
            color="secondary"
          >
            Agregar
          </Button>
        </Grid>
      </Grid>
      <Typography my={4} variant="h6" color="text.secondary">
        Buscar por:
      </Typography>
      <BuscarNombre filtradoNombre={filtradoNombre} filtroNombre={filtroNombre}/>
      <Card sx={{ minWidth: 275, marginTop: "25px", color: "text.secondary" }}>
        <ListaVideojuegos
          fetchVideojuegos={fetchVideojuegos}
          videojuegos={videojuegos}
          filtroNombre = {filtroNombre}
        />
      </Card>
    </Container>
  );
};

export default Inicio;

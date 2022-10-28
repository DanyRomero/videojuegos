import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import axios from "axios";
import ListaVideojuegos from "../components/ListaVideojuegos";

import { Link } from "react-router-dom";
import BuscarNombre from "../components/BuscarNombre";
import BuscarAño from "../components/BuscarAño";
import BuscarDesarrollador from "../components/BuscarDesarrollador";

const Inicio = () => {
  const [videojuegos, setVideojuegos] = useState([]);
  const [filtroNombre, setFiltroNombre] = useState("");
  const [filtroAño, setFiltroAño] = useState("");
  const [filtroDesarrollador, setFiltroDesarrollador] = useState("");

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

  const filtradoNombre = (e) => {
    setFiltroNombre(e.target.value);
  };
  const filtradoAño = (e) => {
    setFiltroAño(e.target.value);
  };
  const filtradoDesarrollador = (e) => {
    setFiltroDesarrollador(e.target.value);
  };

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
      <Grid container  spacing={3}>
        <Grid item md={4}>
          <Typography my={4} variant="h6" color="text.secondary">
            <strong>Buscar por:</strong>
          </Typography>
          <Card
            sx={{ minWidth: 275, marginTop: "25px", color: "text.secondary" }}
          >
            <BuscarNombre
              filtradoNombre={filtradoNombre}
              filtroNombre={filtroNombre}
            />
            <BuscarDesarrollador
              filtradoDesarrollador={filtradoDesarrollador}
              filtroDesarrollador={filtroDesarrollador}
            />
            <BuscarAño filtradoAño={filtradoAño} filtroAño={filtroAño} />
          </Card>
        </Grid>
        <Grid item md={8}>
        <Typography my={4} variant="h6" color="text.secondary">
            <strong>Listado</strong>
          </Typography>
          <Card
            sx={{ minWidth: 275, marginTop: "25px", color: "text.secondary" }}
          >
            <ListaVideojuegos
              fetchVideojuegos={fetchVideojuegos}
              videojuegos={videojuegos}
              filtroNombre={filtroNombre}
              filtroDesarrollador={filtroDesarrollador}
              filtroAño={filtroAño}
            />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Inicio;

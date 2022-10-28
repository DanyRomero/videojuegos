import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CloudinaryImage from "../components/CloudinaryImage";

const Detalles = () => {
  const { id } = useParams();
  const [videojuego, setVideojuego] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5005/videojuegos/${id}`)
      .then((response) => setVideojuego(response.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!videojuego) {
    return <CircularProgress />;
  }

  const { nombre, descripcion, año, desarrollador, consolas, imagen, activo } =
    videojuego;

  return (
    <Container>
      <Typography my={4} variant="h4" color="text.secondary">
        <strong>Detalle del videojuego</strong>
      </Typography>
      <Card sx={{ minWidth: 275, marginTop: "25px", color: "text.secondary" }}>
        <Grid container spacing={4}>
          <Grid item md={4}>
            <Box>
              <CloudinaryImage id={imagen} />
            </Box>
          </Grid>
          <Grid item md={8}>
            <CardContent>
              <Typography variant="h5" component="div" color="#651fff">
                <strong>{nombre}</strong>
              </Typography>
              <Typography sx={{ mb: 1.5 }}>
                Desarrollado por: {desarrollador.nombre}
              </Typography>
              <Typography variant="body2">
                <strong>DESCRIPCIÓN</strong>
              </Typography>
              <Typography variant="body1" sx={{ mb: 1.5 }}>
                {descripcion}
              </Typography>
              <Typography variant="body2">
                <strong>INFORMACIÓN ADICIONAL</strong>
              </Typography>
              <Typography variant="body2">Año: {año}</Typography>
              <Typography variant="body2">
                Consolas: {consolas.map((consola) => consola.nombre).join(", ")}
              </Typography>
              <Typography variant="body2">Activo: {activo}</Typography>
            </CardContent>
            <CardActions>
              <Button component={Link} to="/" sx={{ color: "#651fff" }}>
                Regresar
              </Button>
            </CardActions>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default Detalles;

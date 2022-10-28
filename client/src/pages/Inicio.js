import React, { useEffect, useState } from "react";
import { Button, Card, Container, Typography } from "@mui/material";
import axios from "axios";
import ListaVideojuegos from "../components/ListaVideojuegos";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

const Inicio = () => {
  const [videojuegos, setVideojuegos] = useState([]);

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

  return (
    <Container>
      <Box sx={{display:"flex", marginTop: "25px", justifyContent: "space-between"}}>
        <Typography variant="h4" color="text.secondary">
          <strong>Videojuegos</strong>
        </Typography>
        <Button component={Link} to="/videojuegos" variant="contained" size="small" color="secondary">Agregar videojuego</Button>
      </Box>
      <Card sx={{ minWidth: 275, marginTop: "25px", color: "text.secondary" }}>
        <ListaVideojuegos
          fetchVideojuegos={fetchVideojuegos}
          videojuegos={videojuegos}
        />
      </Card>
    </Container>
  );
};

export default Inicio;

import { Container, Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AgregarNombres from "../components/AgregarNombres";
import ListaDesarrolladores from "../components/ListaDesarrolladores";
import TopDesarrolladores from "../components/TopDesarrolladores";

const Desarrolladores = () => {
  const [desarrolladores, setDesarrolladores] = useState([]);
  const [topDesarrolladores, setTopDesarrolladores] = useState([]);

  const fetchDesarrolladores = () => {
    axios
      .get("http://localhost:5005/desarrolladores")
      .then((response) => {
        setDesarrolladores(response.data);
      })
      .catch((error) => console.log(error));
  };
  const fetchTopDesarrolladores = () => {
    axios
      .get("http://localhost:5005/desarrolladores/top")
      .then((response) => {
        setTopDesarrolladores(response.data);
      })
      .catch((error) => console.log(error));
  };

  const onSubmit = (datos) => {
    axios
      .post(`http://localhost:5005/desarrolladores`, datos)
      .then((response) => {
        fetchDesarrolladores();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchDesarrolladores();
    fetchTopDesarrolladores();
  }, []);

  console.log("topdesa", topDesarrolladores)

  return (
    <Container>
      <Typography my={4} variant="h4" color="text.secondary">
        <strong>Desarrolladores</strong>
      </Typography>
      <Grid container spacing={4}>
        <Grid item md={6}>
          <Typography my={4} variant="h6" color="text.secondary">
            Agregar nuevo desarrollador
          </Typography>
          <AgregarNombres onSubmit={onSubmit} />
          <ListaDesarrolladores
            fetchDesarrolladores={fetchDesarrolladores}
            desarrolladores={desarrolladores}
          />
        </Grid>
        <Grid item md={6}>
          <TopDesarrolladores topDesarrolladores={topDesarrolladores}/>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Desarrolladores;

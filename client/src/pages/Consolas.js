import { Container, Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AgregarNombres from "../components/AgregarNombres";

import ListaConsolas from "../components/ListaConsolas";
import TopConsolas from "../components/TopConsolas";

const Consolas = () => {
  const [consolas, setConsolas] = useState([]);
  const [topConsolas, setTopConsolas] = useState([]);

  const fetchConsolas = () => {
    axios
      .get("http://localhost:5005/consolas")
      .then((response) => {
        setConsolas(response.data);
      })
      .catch((error) => console.log(error));
  };

  const onSubmit = (datos) => {
    axios
      .post(`http://localhost:5005/consolas`, datos)
      .then((response) => {
        fetchConsolas();
      })
      .catch((err) => console.log(err));
  };

  const fetchTopConsolas = () => {
    axios.get(`http://localhost:5005/consolas/top`)
    .then((response) => {
      setTopConsolas(response.data);
    })
    .catch((error) => console.log(error));
  }

  useEffect(() => {
    fetchConsolas();
    fetchTopConsolas();
  }, []);

  

  return (
    <Container>
      <Typography my={4} variant="h4" color="text.secondary">
        <strong>Consolas</strong>
      </Typography>
      <Grid container spacing={4}>
        <Grid item md={6}>
          <Typography my={4} variant="h6" color="text.secondary">
            Agregar nueva consola
          </Typography>
          <AgregarNombres onSubmit={onSubmit} />
          <ListaConsolas fetchConsolas={fetchConsolas} consolas={consolas} />
        </Grid>
        <Grid item md={6}>
          <TopConsolas topConsolas={topConsolas}/>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Consolas;

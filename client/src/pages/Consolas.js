import { Container, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AgregarNombres from "../components/AgregarNombres";

import ListaConsolas from "../components/ListaConsolas";

const Consolas = () => {
  const [consolas, setConsolas] = useState([]);

  const fetchConsolas = () => {
    axios
      .get("http://localhost:5005/consolas")
      .then((response) => {
        setConsolas(response.data);
      })
      .catch((error) => console.log(error));
  }

  const onSubmit = (datos) => {
    axios
      .post(`http://localhost:5005/consolas`, datos)
      .then((response) => {
        fetchConsolas()
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchConsolas()
  }, []);

  return (
    <Container>
      <Typography my={4} variant="h4" color="text.secondary">
        <strong>Consolas</strong>
      </Typography>
      <Typography my={4} variant="h6" color="text.secondary">
        Agregar nueva consola
      </Typography>
      <AgregarNombres onSubmit={onSubmit} />
      <ListaConsolas fetchConsolas={fetchConsolas} consolas={consolas} />
    </Container>
  );
};

export default Consolas;

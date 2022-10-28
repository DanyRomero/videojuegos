import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useParams } from "react-router-dom";
import FormularioEditar from "../components/FormularioEditar";

const EditarVideojuego = () => {
  const{id}= useParams();
  return (
    <Container>
      <Typography my={4} variant="h4" color="text.secondary">
        <strong>Editar videojuego</strong>
      </Typography>
      <FormularioEditar id={id}/>
    </Container>
  );
};

export default EditarVideojuego;

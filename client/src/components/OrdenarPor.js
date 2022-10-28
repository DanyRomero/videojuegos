import { Button, Container, Typography } from "@mui/material";
import React from "react";
import EventIcon from "@mui/icons-material/Event";
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import PersonIcon from '@mui/icons-material/Person';

const OrdenarPor = (props) => {
  const { setOrden } = props;
  return (
    <Container>
      <Typography my={3} variant="body1" color="text.secondary">
        Ordenar por:
      </Typography>
      <Button
        size="small"
        color="inherit"
        onClick={() => {
          setOrden("año");
        }}
      >
        <EventIcon />
        Año
      </Button>
      <Button
        size="small"
        color="inherit"
        onClick={() => {
          setOrden("nombre");
        }}
      >
        <LabelOutlinedIcon />
        Nombre
      </Button>
      <Button
        size="small"
        color="inherit"
        onClick={() => {
          setOrden("desarrollador");
        }}
      >
        <PersonIcon />
        Desarrollador
      </Button>
    </Container>
  );
};

export default OrdenarPor;

import { Button, Container, Typography } from "@mui/material";
import React from "react";
import EventIcon from "@mui/icons-material/Event";

const OrdenarPor = (props) => {
  const { setOrden } = props;
  return (
    <Container>
      <Typography my={3} variant="body1" color="text.secondary">
        Ordenar por:
      </Typography>
      <Button
        color="inherit"
        onClick={() => {
          setOrden("año");
        }}
      >
        <EventIcon />
        Año
      </Button>
    </Container>
  );
};

export default OrdenarPor;

import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

const AgregarNombres = (props) => {
  const { onSubmit } = props
  const [nombre, setNombre] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ nombre })
    setNombre("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex" }}>
      <TextField
        required
        margin="dense"
        label="Nombre"
        fullWidth
        name="nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <Button
        type="submit"
        variant="contained"
        size="small"
        sx={{ bgcolor: "#651fff", marginLeft: "10px" }}
      >
        Crear
      </Button>
    </form>
  );
};

export default AgregarNombres;

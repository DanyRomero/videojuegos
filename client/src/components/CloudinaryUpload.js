import { Button, Typography,Container } from "@mui/material";
import React from "react";

const CloudinaryUpload = (props) => {
  const { onSuccess } = props
  const widget = window.cloudinary.createUploadWidget(
    {
      cloudName: "dorrinypn",
      uploadPreset: "ef033vpl",
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        onSuccess(result.info)
      }
    }
  );
  return (
    <Container sx={{display:"flex", justifyContent:"space-between", border: "1px solid #bdbdbd", padding:"8px"}}>
      <Typography color="text.secondary" pt={1}>Subir imagen del videojuego</Typography>
      <Button onClick={() => widget.open()}>Cargar</Button>
    </Container>
  );
};

export default CloudinaryUpload;

import {
  Container,
  Button,
  TextField,
  Paper,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CloudinaryUpload from "./CloudinaryUpload";
import CloudinaryImage from "./CloudinaryImage";

const FormularioVideojuego = () => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [desarrollador, setDesarrollador] = useState("");
  const [desarrolladores, setDesarrolladores] = useState([]);
  const [año, setAño] = useState("");
  const [consolas, setConsolas] = useState([]);
  const [consolasExistentes, setConsolasExistentes] = useState([]);
  const [imagen, setImagen] = useState("");
  const [activo, setActivo] = useState("");

  const navigate = useNavigate();

  const fetchDesarrolladores = () => {
    axios
      .get("http://localhost:5005/desarrolladores")
      .then((response) => {
        setDesarrolladores(response.data);
      })
      .catch((error) => console.log(error));
  };

  const fetchConsolas = () => {
    axios
      .get("http://localhost:5005/consolas")
      .then((response) => {
        setConsolasExistentes(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchDesarrolladores();
    fetchConsolas();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:5005/videojuegos`, {
        nombre,
        descripcion,
        desarrollador,
        año,
        consolas,
        imagen,
        activo,
      })
      .then((response) => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  const handleCloudinaryUpload = (data) => {
    console.log("Cloudinary Upload", data);
    setImagen(data.public_id);
  };

  return (
    <Container sx={{ marginBottom: "50px" }}>
      <Grid container spacing={4}>
        <Grid item md={6}>
          <Paper sx={{ p: "15px" }} elevation={3}>
            <form onSubmit={handleSubmit}>
              <TextField
                required
                margin="dense"
                label="Nombre"
                fullWidth
                name="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
              <TextField
                multiline
                required
                margin="dense"
                inputProps={{ maxLength: 300 }}
                placeholder="Descripción"
                style={{ width: "100%" }}
                name="descripcion"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
              />
              <FormControl fullWidth margin="dense">
                <InputLabel id="demo-select-small">Desarrollador</InputLabel>
                <Select
                  required
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={desarrollador}
                  label="Desarrollador"
                  onChange={(e) => setDesarrollador(e.target.value)}
                >
                  {desarrolladores.map((desarrollador) => {
                    const { _id, nombre } = desarrollador;
                    return (
                      <MenuItem key={_id} value={_id}>
                        {nombre}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>

              <TextField
                required
                type="number"
                margin="dense"
                label="Año"
                fullWidth
                name="año"
                value={año}
                onChange={(e) => setAño(e.target.value)}
              />

              <FormControl fullWidth margin="dense">
                <InputLabel id="demo-select-small">Consolas</InputLabel>
                <Select
                  multiple
                  required
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={consolas}
                  label="Consolas"
                  onChange={(e) => setConsolas(e.target.value)}
                >
                  {consolasExistentes.map((consola) => {
                    const { _id, nombre } = consola;
                    return (
                      <MenuItem key={_id} value={_id}>
                        {nombre}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
              <CloudinaryUpload onSuccess={handleCloudinaryUpload} />
              {imagen && <Typography variant="body2" my={1} color="primary">Imagen cargada</Typography>}
              <TextField
                required
                margin="dense"
                label="Activo"
                fullWidth
                name="activo"
                value={activo}
                onChange={(e) => setActivo(e.target.value)}
              />
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                sx={{ marginTop: "10px", width: "100%" }}
              >
                Crear
              </Button>
            </form>
          </Paper>
        </Grid>
        <Grid item md={6}>
          <Box display="flex" justifyContent="center">
            {imagen && <CloudinaryImage id={imagen} />}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FormularioVideojuego;

import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CloudinaryImage from "./CloudinaryImage";
import CloudinaryUpload from "./CloudinaryUpload";

const FormularioEditar = (props) => {
  const { id } = props;
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
  const fetchVideojuego = () => {
    axios
      .get(`http://localhost:5005/videojuegos/${id}`)
      .then((response) => {
        console.log("juego pedido", response.data);
        const {
          nombre,
          descripcion,
          desarrollador,
          año,
          consolas,
          imagen,
          activo,
        } = response.data;

        setNombre(nombre);
        setDescripcion(descripcion);
        setDesarrollador(desarrollador._id);
        setConsolas(consolas.map((consola) => consola._id));
        setAño(año);
        setImagen(imagen);
        setActivo(activo);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchDesarrolladores();
    fetchConsolas();
    fetchVideojuego();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5005/videojuegos/${id}`, {
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

  const onSuccess = (data) => {
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

              <CloudinaryUpload onSuccess={onSuccess} />
              {imagen && (
                <Typography variant="body2" my={1} color="primary">
                  Imagen a cambiar
                </Typography>
              )}
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
                sx={{ marginTop: "10px", width: "100%" }}
                color="secondary"
              >
                Actualizar
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

export default FormularioEditar;

import {
  Button,
  Container,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import axios from "axios";
import React from "react";
import GamesIcon from "@mui/icons-material/Games";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import { Link } from "react-router-dom";

const ListaVideojuegos = (props) => {
  const { videojuegos, fetchVideojuegos, filtroNombre, filtroAño, filtroDesarrollador } = props;

  const borrarVideojuego = (id) => {
    axios
      .delete(`http://localhost:5005/videojuegos/${id}`)
      .then((response) => {
        fetchVideojuegos();
      })
      .catch((err) => console.log(err));
  };

  let filtroVideojuegos = videojuegos;
  if (filtroNombre) {
    filtroVideojuegos = filtroVideojuegos.filter((videojuego) =>
      videojuego.nombre.toLowerCase().includes(filtroNombre.toLowerCase())
    );
  }
  if (filtroDesarrollador) {
    filtroVideojuegos = filtroVideojuegos.filter((videojuego) =>
      videojuego.desarrollador.nombre.toLowerCase().includes(filtroDesarrollador.toLowerCase())
    );
  }
  if (filtroAño) {
    filtroVideojuegos = filtroVideojuegos.filter((videojuego) => videojuego.año === Number(filtroAño));
  }

  if (filtroVideojuegos.length === 0){
    return <p>No se encontraron videojuegos</p>
  }

  return (
    <Container>
      <List sx={{ width: "100%" }}>
        {filtroVideojuegos?.map((videojuego) => {
          const { _id, nombre, año, desarrollador } = videojuego;
          return (
            <Grid key={_id} container>
              <ListItem sx={{ color: "text.secondary" }}>
                <Grid
                  item
                  sm={12}
                  md={10}
                  sx={{ flexGrow: 1, display: "flex" }}
                >
                  <ListItemAvatar>
                    <GamesIcon sx={{ color: "#651fff" }} />
                  </ListItemAvatar>
                  <Link
                    to={`/videojuegos/${_id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <ListItemText
                      sx={{ color: "text.secondary" }}
                      primary={nombre}
                      secondary={`Año: ${año} · Desarrollador: ${desarrollador.nombre}`}
                    />
                  </Link>
                </Grid>
                <Grid item sm={12} md={2}>
                  <Button onClick={() => borrarVideojuego(_id)} color="error">
                    X
                  </Button>
                  <Button component={Link} to={`/${_id}`} color="primary">
                    <CreateOutlinedIcon />
                  </Button>
                </Grid>
              </ListItem>
            </Grid>
          );
        })}
      </List>
    </Container>
  );
};

export default ListaVideojuegos;

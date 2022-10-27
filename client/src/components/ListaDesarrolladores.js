import {
  Container,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Button
} from "@mui/material";
import React from "react";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import axios from "axios";
import PersonIcon from '@mui/icons-material/Person';


const ListaDesarrolladores = (props) => {
  const { desarrolladores, fetchDesarrolladores } = props;

  const borrarConsola = (id)=> {
    axios
      .delete(`http://localhost:5005/desarrolladores/${id}`)
      .then((response) => {
        fetchDesarrolladores()
      })
      .catch((err) => console.log(err));
  }

  return (
    <Container>
      <List sx={{ width: "100%", mt: 3 }}>
        {desarrolladores.map((desarrollador) => {
          const { _id, nombre } = desarrollador;
          return (
            <ListItem key={_id}>
              <ListItemAvatar>
                <PersonIcon sx={{ color: "#651fff" }} />
              </ListItemAvatar>
              <ListItemText>{nombre}</ListItemText>
              <Button onClick={() => borrarConsola(_id)} color="error">X</Button>
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
};

export default ListaDesarrolladores;

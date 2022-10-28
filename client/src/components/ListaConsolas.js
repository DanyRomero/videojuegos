import {
  Container,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Button,
  Card,
} from "@mui/material";
import React from "react";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import axios from "axios";

const ListaConsolas = (props) => {
  const { consolas, fetchConsolas } = props;

  const borrarConsola = (id) => {
    axios
      .delete(`http://localhost:5005/consolas/${id}`)
      .then((response) => {
        fetchConsolas();
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <List sx={{ width: "100%", mt: 3, color: "text.secondary" }}>
        <Card>
          {consolas.map((consola) => {
            const { _id, nombre } = consola;
            return (
              <ListItem key={_id}>
                <ListItemAvatar>
                  <VideogameAssetIcon sx={{ color: "#651fff" }} />
                </ListItemAvatar>
                <ListItemText>{nombre}</ListItemText>
                <Button onClick={() => borrarConsola(_id)} color="error">
                  X
                </Button>
              </ListItem>
            );
          })}
        </Card>
      </List>
    </Container>
  );
};

export default ListaConsolas;

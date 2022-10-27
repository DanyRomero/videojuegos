import {
  Container,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import React from "react";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import { Box } from "@mui/system";

const ListaConsolas = (props) => {
  const { consolas } = props;
  return (
    <Container>
      <List sx={{ width: "100%", mt: 3 }}>
        {consolas.map((consola) => {
          const { _id, nombre } = consola;
          return (
            <ListItem key={_id}>
              <ListItemAvatar>
                <VideogameAssetIcon sx={{ color: "#651fff" }} />
              </ListItemAvatar>
              <ListItemText>{nombre}</ListItemText>
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
};

export default ListaConsolas;

import {
  Card,
  Container,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const TopConsolas = (props) => {
  const { topConsolas } = props;
  return (
    <Container>
      <Typography my={4} variant="h6" color="text.secondary">
        Consolas con más videojuegos
      </Typography>
      <List sx={{ width: "100%", mt: 3, color: "text.secondary" }}>
        <Card>
          {topConsolas.map((consola) => {
            const { _id, nombre, count } = consola;
            return (
              <ListItem key={_id}>
                <ListItemText>{nombre}</ListItemText>
                <ListItemIcon>Videojuegos:{count}</ListItemIcon>
              </ListItem>
            );
          })}
        </Card>
      </List>
    </Container>
  );
};

export default TopConsolas;

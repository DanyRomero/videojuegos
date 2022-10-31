import { Card, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react'

const TopDesarrolladores = (props) => {
     const { topDesarrolladores } = props;
  return (
    <Container>
      <Typography my={4} variant="h6" color="text.secondary">
        Top 5 de desarrolladores que tienen videojuegos para más consolas
      </Typography>
      <List sx={{ width: "100%", mt: 3, color: "text.secondary" }}>
        <Card>
          {topDesarrolladores.map((consola) => {
            const { _id, desarrollador, consolas } = consola;
            return (
              <ListItem key={_id}>
                <ListItemText>{desarrollador.nombre}</ListItemText>
                <ListItemIcon>Consolas:{consolas}</ListItemIcon>
              </ListItem>
            );
          })}
        </Card>
      </List>
    </Container>
  )
}

export default TopDesarrolladores
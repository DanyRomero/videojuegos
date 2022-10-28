import { Button, Container, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import axios from 'axios';
import React from 'react'
import GamesIcon from '@mui/icons-material/Games';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import { Link } from 'react-router-dom';


const ListaVideojuegos = (props) => {
  const{videojuegos, fetchVideojuegos}= props;

  const borrarVideojuego = (id)=> {
    axios
      .delete(`http://localhost:5005/videojuegos/${id}`)
      .then((response) => {
        fetchVideojuegos()
      })
      .catch((err) => console.log(err));
  }
  
  
  return (
    <Container>
      <List sx={{ width: "100%" }}>
        {videojuegos.map((desarrollador) => {
          const { _id, nombre } = desarrollador;
          return (
            <ListItem component={Link} to={`/videojuegos/${_id}`} key={_id} sx={{color:"text.secondary"}}>
              <ListItemAvatar>
                <GamesIcon sx={{ color: "#651fff" }} />
              </ListItemAvatar>
              <ListItemText>{nombre}</ListItemText>
              <Button onClick={() => borrarVideojuego(_id)} color="error">X</Button>
              <Button component={Link} to={`/${_id}`} color="primary"><CreateOutlinedIcon /></Button>
            </ListItem>
          );
        })}
      </List>
    </Container>
  )
}

export default ListaVideojuegos
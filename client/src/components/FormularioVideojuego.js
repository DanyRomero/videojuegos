
import { Container, Typography, Button, TextField, Paper } from "@mui/material";
import React, { useState } from "react";
import TextareaAutosize from '@mui/material/TextareaAutosize';




const FormularioVideojuego = () => {
  const[nombre, setNombre] = useState("")
  const[descripcion, setDescripcion] = useState("")
  const[desarrollador, setDesarrollador] = useState("")
  const[año, setAño] = useState("")
  const[consolas, setConsolas] = useState("")
  const[imagen, setImagen] = useState("")
  const[activo, setActivo] = useState("")

  return (
    <Container>
      <Paper sx={{p: "15px"}} elevation={3}>
        <form>
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
            style={{ width: "100%"}}
            name="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
          
          <TextField
            required
            margin="dense"
            label="Desarrollador"
            fullWidth
            name="desarrollador"
            value={desarrollador}
            onChange={(e) => setDesarrollador(e.target.value)}
          />
          <TextField
            required
            type= "number"
            margin="dense"
            label="Año"
            fullWidth
            name="año"
            value={año}
            onChange={(e) => setAño(e.target.value)}
          />
          <TextField
            required
            margin="dense"
            label="Conosolas"
            fullWidth
            name="consolas"
            value={consolas}
            onChange={(e) => setConsolas(e.target.value)}
          />
          <TextField
            required
            margin="dense"
            label="Imagen"
            fullWidth
            name="imagen"
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
          />
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
            size="small"
            sx={{ bgcolor: "#651fff", marginLeft: "10px" }}
          >
            Crear
          </Button>
        </form>
      </Paper>
    </Container>
  )
}

export default FormularioVideojuego
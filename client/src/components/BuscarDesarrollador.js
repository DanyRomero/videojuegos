import { Container, Grid, TextField } from "@mui/material";


const BuscarDesarrollador = (props) => {
  const { filtradoDesarrollador, filtroDesarrollador } = props;

  return (
    <Container>
      <form style={{paddingTop:"15px" }}>
        <Grid container>
          <Grid item xs>
            <TextField
              size="small"
              label="Buscar por Desarrollador"
              value={filtroDesarrollador}
              fullWidth
              onChange={filtradoDesarrollador}
            />
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default BuscarDesarrollador;

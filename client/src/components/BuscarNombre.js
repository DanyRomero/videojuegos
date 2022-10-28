import { Container, Grid, TextField } from "@mui/material";

const BuscarNombre = (props) => {
  const { filtradoNombre, filtroNombre } = props;

  return (
    <Container>
      <form>
        <Grid container>
          <Grid item xs>
            <TextField
              size="small"
              label="Buscar por Nombre"
              value={filtroNombre}
              fullWidth
              onChange={filtradoNombre}
            />
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default BuscarNombre;

import { Button, Container, Grid, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const BuscarDesarrollador = (props) => {
  const { filtradoDesarrollador, filtroDesarrollador } = props;

  return (
    <Container>
      <form>
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

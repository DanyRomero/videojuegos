import { Button, Container, Grid, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const BuscarAño = (props) => {
  const { filtradoAño, filtroAño } = props;

  return (
    <Container>
      <form>
        <Grid container>
          <Grid item xs>
            <TextField
              type="number"
              size="small"
              label="Buscar por Año"
              value={filtroAño}
              fullWidth
              onChange={filtradoAño}
            />
          </Grid>

        </Grid>
      </form>
    </Container>
  );
};

export default BuscarAño;

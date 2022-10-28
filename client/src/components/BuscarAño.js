import { Container, Grid, TextField } from "@mui/material";


const BuscarAño = (props) => {
  const { filtradoAño, filtroAño } = props;

  return (
    <Container>
      <form style={{paddingTop:"15px" }}>
        <Grid container>
          <Grid item xs>
            <TextField
              type="number"
              size="small"
              label="Buscar por Año exacto"
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

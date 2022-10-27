import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{bgcolor:"#651fff"}}>
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            sx={{ flexGrow: 1, color: "white", textDecoration: "none" }}
          >
            VideogamesApp
          </Typography>
          <Button component={Link} to="/consolas" sx={{ color: "white" }}>
            Consolas
          </Button>
          <Button
            component={Link}
            to="/desarrolladores"
            sx={{ color: "white" }}
          >
            Desarrolladores
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

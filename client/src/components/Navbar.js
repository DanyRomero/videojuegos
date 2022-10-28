import React from "react";
import { Link } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import { AppBar, Box, Button } from "@mui/material";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

const drawerWidth = 240;
const navItems = [
  { to: "/", title: "Videojuegos" },
  { to: "/consolas", title: "Consolas" },
  { to: "/desarrolladores", title: "Desarrolldores" },
];

const Navbar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawerItems = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", backgroundColor: " #f5f5f5"}}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <SportsEsportsIcon />
        VideogamesApp
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.to} disablePadding>
            <ListItemButton
              component={Link}
              to={item.to}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" position="static"  sx={{ bgcolor: "#651fff" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              flexGrow: 1,
              alignItems: "center",
              display: { xs: "none", sm: "flex" },
            }}
          >
            <SportsEsportsIcon />
            <Typography variant="h6" component="div">
              VideogamesApp
            </Typography>
          </Box>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {/* menu que se muestra cuando un usuario inicia sesión */}
                <>
                {navItems.map((item) => (
                  <Button
                    key={item.to}
                    sx={{ color: "#fff" }}
                    component={Link}
                    to={item.to}
                  >
                    {item.title}
                  </Button>
                ))}
               
              </> 
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
        {drawerItems}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Navbar;

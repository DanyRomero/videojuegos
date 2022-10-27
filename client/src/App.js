import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Consolas from "./pages/Consolas";
import Desarrolladores from "./pages/Desarrolladores";
import Inicio from "./pages/Inicio";
import Videojuegos from "./pages/Videojuegos";

function App() {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/consolas" element={<Consolas />} />
        <Route path="/desarrolladores" element={<Desarrolladores />} />
        <Route path="/videojuegos" element={<Videojuegos />} />
      </Routes>
    </Box>
  );
}

export default App;

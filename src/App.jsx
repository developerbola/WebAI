import { Routes, Route } from "react-router-dom";
import { Home, About, Services, Blogs } from "./pages/pages";
import { ThemeProvider, createTheme } from "@mui/material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import PostItem from "./components/BlogsComponents/PostItem";
import "./styles/App.css";
import { Box } from "@mui/material";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const theme = createTheme({
    palette: { mode: darkMode ? "dark" : "light" },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:slug" element={<PostItem />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </main>
        
        <Footer />
        <ToastContainer position="top-right" autoClose={1000} />
      </ThemeProvider>
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
      </Box>
    </>
  );
}

export default App;

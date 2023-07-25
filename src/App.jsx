import { Routes, Route } from "react-router-dom";
import { Home, About, Services, Solution } from "./pages/pages";
import { ThemeProvider, createTheme } from "@mui/material";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import "./styles/App.css";
import Cursor  from "./components/Cursor";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const theme = createTheme({
    palette: { mode: darkMode ? "dark" : "light" },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="body">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/solution" element={<Solution />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
            </Routes>
          </main>
        </div>

        <ToastContainer position="top-right" autoClose={1000} />
      </ThemeProvider>
      <Cursor />
    </>
  );
}

export default App;

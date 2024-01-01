import { Box, Button, Typography } from "@mui/material";
import logo from "../../../public/favicon.png";
import { Link } from "react-router-dom";
const Index = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          minHeight: "20vh",
          p: "25px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            bgcolor: "#ffffff30",
            minHeight: "15vh",
            borderRadius: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              width: "30%",
              height: "10vh",
              px: "40px",
            }}
          >
            <Link to={"/services"}>
              <Button
                sx={{
                  fontSize: "20px",
                  textTransform: "capitalize",
                  color: "#fff",
                }}
              >
                Services
              </Button>
            </Link>
            <Link to={"/blogs"}>
              <Button
                sx={{
                  fontSize: "20px",
                  textTransform: "capitalize",
                  color: "#fff",
                }}
              >
                Blogs
              </Button>
            </Link>
            <Link to={"/about"}>
              <Button
                sx={{
                  fontSize: "20px",
                  textTransform: "capitalize",
                  color: "#fff",
                }}
              >
                About
              </Button>
            </Link>
          </Box>
          <Box
            sx={{
              display: "grid",
              placeItems: "center",
              width: "30%",
              height: "10vh",
            }}
          >
            <img src={logo} height={50} />
          </Box>
          <Box
            sx={{
              display: "grid",
              placeItems: "center",
              width: { xs: "100%", md: "35%" },
              height: "10vh",
            }}
          >
            <Typography textAlign={"center"}>
              Copyright © {new Date().getFullYear()} | Powered by WebAI
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Index;

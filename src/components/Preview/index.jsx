import image from "../../assets/preview2.jpeg";
import { Box, Typography, Button } from "@mui/material";
import "./preview.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const index = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "grid",
          placeItems: "center",
          py: "80px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            flexDirection: { xs: "column", xl: "row" },
            width: "80%",
            py: "70px",
            bgcolor: "#ffffff20",
            backdropFilter: "blur(10px)",
            borderRadius: "20px",
            boxShadow: "inset 0px 1px 3px 0px #ffffff20",
          }}
        >
          <Box
            sx={{
              overflow: "hidden",
              borderTopLeftRadius: { xs: "10px", xl: "50%" },
              borderBottomLeftRadius: { xs: "10px", xl: "50%" },
              width: { xs: "100%", xl: "40%" },
              px: { xs: "40px", xl: 0 },
              display: "grid",
              placeItems: "center",
              mb: { xs: "10px", xl: "0" },
            }}
          >
            <img src={image} style={{ width: "100%", borderRadius: "10px" }} />
          </Box>
          <Box sx={{ textAlign: { xs: "center", xl: "inherit" } }}>
            <Typography
              sx={{ fontSize: { xs: "30px", sm: "45px", xl: "50px" } }}
            >
              Be with the times <br /> Be with Us
            </Typography>
            <Typography variant="h6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />{" "}
              Delectus veniam quam laboriosam labore.
            </Typography>
            <Button
              variant="contained"
              sx={{
                color: "#fff",
                background: "linear-gradient(31deg, #00b3ff,#00ff9d)",
                borderRadius: "20px",
                minWidth: "30%",
                py: "10px",
                mt: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mx: { xs: "auto", xl: "inherit" },
              }}
              className="hoverBtn"
            >
              Get Started <ChevronRightIcon sx={{ mb: "1px" }} />
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default index;

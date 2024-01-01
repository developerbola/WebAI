import { Typography, Button, Box } from "@mui/material";
import bannerRobo from "../../../assets/roboBanner.png";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./banner.css";
import { Link } from "react-router-dom";
const Index = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", xl: "row" },
          justifyContent: "space-around",
          height: "70vh",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            textAlign: { xs: "center", xl: "start" },
            alignItems: { xs: "center", xl: "flex-start" },
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="h4" py={"20px"}>
            <span className="underGrow powered">Powered by WebAI</span>
          </Typography>
          <Typography
            variant="h2"
            sx={{ fontSize: { xs: "35px", sm: "45px", md: "55px" } }}
          >
            Build Your <span className="underGrow">Business</span> <br />
            With <span className="underGrow">Us</span>
          </Typography>
          <Typography variant="h4" sx={{ fontSize: "28px" }}>
            We can help you for your business issues
          </Typography>
          <Link to={"/services"}>
            <Button
              className="bannerBtn"
              variant="outlined"
              sx={{
                color: "#fff",
                borderRadius: "20px",
                width: "100%",
                maxWidth: 290,
                minWidth: 155,
                py: "10px",
                mt: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Get Started <ChevronRightIcon sx={{ mb: "1px" }} />
            </Button>
          </Link>
        </Box>
        <Box sx={{ display: { xs: "none", xl: "block" } }}>
          <img src={bannerRobo} height={500} />
        </Box>
      </Box>
    </>
  );
};

export default Index;

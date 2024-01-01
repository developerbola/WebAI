import { Typography, Button, Box } from "@mui/material";
import bannerRobo from "../../../assets/aboutBanner.png";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
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
          <Typography
            variant="h2"
            sx={{ fontSize: { xs: "35px", sm: "45px", md: "55px" } }}
          >
            Be with the times <br />
            Be with Us
          </Typography>
          <Typography variant="h4" sx={{ fontSize: "28px" }}>
            Our AI can help you in your business <br /> analysis
          </Typography>
          <Typography variant="body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
            <br />
            veniam quam laboriosam labore.
          </Typography>
        </Box>
        <Box sx={{ display: { xs: "none", xl: "block" } }}>
          <img src={bannerRobo} height={500} />
        </Box>
      </Box>
    </>
  );
};

export default Index;

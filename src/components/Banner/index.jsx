import { Typography, Button, Box } from "@mui/material";
import bannerRobo from "../../assets/roboBanner.png";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
const index = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          height: "70vh",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="h2">
            Build Your <span className="underGrow">Business</span> <br />
            With <span className="underGrow">Us</span>
          </Typography>
          <Typography variant="h4" sx={{ fontSize: "28px" }}>
            We can help you for your business issues
          </Typography>
          <Box className={"bannerBtn"}>
            <Button
              variant="contained"
              sx={{
                color: "#fff",
                bgcolor: "#00D1FF",
                borderRadius: "20px",
                width: "30%",
                py: "9px",
                mt: "30px",
                boxShadow: "1px 1px 30px 3px #00b3ff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Learn More <ChevronRightIcon sx={{ mb: "1px" }} />
            </Button>
          </Box>
        </Box>
        <Box>
          <img src={bannerRobo} height={500} />
        </Box>
      </Box>
    </>
  );
};

export default index;

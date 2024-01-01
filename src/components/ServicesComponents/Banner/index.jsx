import { Box, Typography, Button } from "@mui/material";
import paymentBanner from "../../../assets/paymentBanner.png";
const Index = () => {
  return (
    <>
      <Box
        sx={{
          minHeight: "60vh",
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "50%", textAlign: "center" },
            p: "75px",
          }}
        >
          <Typography sx={{ fontSize: "40px" }}>Our Services</Typography>
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "200",
              mt: "10px",
              display: "-webkit-box",
              overflow: "hidden",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: "3"
            }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
            minima, incidunt impedit rerum accusamus odit sunt sint et, iusto
            laborum modi ducimus quod perferendis.
          </Typography>
          <Button
            variant={"outlined"}
            sx={{
              color: "#fff",
              borderRadius: "20px",
              mt: "20px",
              p: "7px 17px",
              mx: { xs: "auto", md: 0 },
            }}
          >
            Learn More
          </Button>
        </Box>
        <Box
          sx={{
            width: {
              xs: "100%",
              md: "50%",
            },
            display: "grid",
            placeItems: "center",
            p: "15px",
          }}
        >
          <img src={paymentBanner} height={400} />
        </Box>
      </Box>
    </>
  );
};

export default Index;

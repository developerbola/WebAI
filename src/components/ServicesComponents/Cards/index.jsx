import { Box } from "@mui/material";
import PaymentCard from "./PaymentCard";
const Index = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          minHeight: "40vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          flexDirection: { xs: "column", md: "row" },
          p: "50px 100px",
        }}
      >
        <PaymentCard price={"$8"} color={"#54ffc9"} planName={"Basic Plan"} />
        <PaymentCard price={"$48"} color={"#ffe100"} planName={"Pro Plan"} />
        <PaymentCard
          price={"$24"}
          color={"#8e85ff"}
          planName={"Standart Plan"}
        />
      </Box>
    </>
  );
};

export default Index;

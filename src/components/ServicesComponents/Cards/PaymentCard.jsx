import {
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
const PaymentCard = ({ price, planName, color }) => {
  let scale = null;

  price == "$48" ? scale == "1.6" : scale == "1";
  return (
    <>
      <Card
        sx={{
          width: { xs: "270px", md: "25%" },
          height: "250px",
          bgcolor: "#ffffff20",
          p: "15px",
          borderRadius: "9px",
          mt: { xs: "15px", md: 0 },
          scale: scale,
        }}
      >
        <CardContent>
          <Typography sx={{ fontSize: "30px", color: color }} component="div">
            {planName}
          </Typography>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-end",
              color: "#b9b9b9",
            }}
          >
            <Typography variant="h3" height={51} sx={{ color: "#fff" }}>
              {price}
            </Typography>
            /month
          </Typography>
          <Typography>Billed Yearly</Typography>
        </CardContent>
        <CardActions sx={{ py: "20px" }}>
          <Button
            variant="contained"
            sx={{
              mx: "auto",
              p: "8px",
              width: "70%",
              textTransform: "capitalize",
              bgcolor: "#83838330",
              color: "#fff",
              borderRadius: "20px",
            }}
          >
            Upgrade Plan
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default PaymentCard;

import { Box, CardContent, Typography, Card } from "@mui/material";
import { motion } from "framer-motion";
import BoltIcon from "@mui/icons-material/Bolt";
import SearchIcon from "@mui/icons-material/Search";
import SignalWifiBarIcon from "@mui/icons-material/SignalWifi0Bar";
import "../cards.css";

const MeCard = ({ className, text, gradient }) => {
  const color = `linear-gradient(31deg, ${gradient})`;
  let icon = null;

  if (className === "boltIcon") {
    icon = (
      <BoltIcon
        sx={{
          fontSize: "3rem",
          zIndex: "1",
        }}
      />
    );
  } else if (className === "searchIcon") {
    icon = (
      <SearchIcon
        sx={{
          fontSize: "3rem",
          zIndex: "1",
        }}
      />
    );
  } else if (className === "wifiIcon") {
    icon = (
      <SignalWifiBarIcon
        sx={{
          fontSize: "3rem",
          zIndex: "1",
        }}
      />
    );
  }

  return (
    <>
      <Box sx={{ minWidth: { xs: "50%", sm: "25%" } }}>
        <motion.div whileHover={{ y: "-10%" }} whileTap={{ scale: 1.1 }}>
          <Card
            sx={{
              bgcolor: "#ffffff20",
              borderRadius: "15px",
            }}
            className="card"
          >
            <CardContent
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                minWidth: "170px",
              }}
            >
              <Box
                className={className}
                sx={{
                  position: "relative",
                  background: color,
                  height: "80px",
                  width: "80px",
                  p: "10px",
                  borderRadius: "50%",
                  mb: "10px",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                {icon}
              </Box>

              <Typography variant="h5">{text}</Typography>
            </CardContent>
          </Card>
        </motion.div>
      </Box>
    </>
  );
};

export default MeCard;

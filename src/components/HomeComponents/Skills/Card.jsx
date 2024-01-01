import { Box, Typography } from "@mui/material";
import BoltIcon from "@mui/icons-material/Bolt";
import SearchIcon from "@mui/icons-material/Search";
import SignalWifiBarIcon from "@mui/icons-material/SignalWifi0Bar";

const Card = ({ title, body, className, fade }) => {
  let icon = null;

  if (className === "boltIcon") {
    icon = (
      <BoltIcon
        sx={{
          fontSize: "2rem",
          zIndex: "1",
        }}
      />
    );
  } else if (className === "searchIcon") {
    icon = (
      <SearchIcon
        sx={{
          fontSize: "2rem",
          zIndex: "1",
        }}
      />
    );
  } else if (className === "wifiIcon") {
    icon = (
      <SignalWifiBarIcon
        sx={{
          fontSize: "2rem",
          zIndex: "1",
        }}
      />
    );
  }
  return (
    <>
      <div data-aos={`fade-${fade}`}>
        <Box
          sx={{
            position: "relative",
            width: "70%",
            p: "30px",
            backdropFilter: "blur(26px)",
            bgcolor: "#ffffff20",
            borderRadius: "10px",
            m: "15px auto",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "600" }}>
            {title}
          </Typography>
          <Typography variant="h5" sx={{ mt: "10px", fontWeight: "100" }}>
            {body}
          </Typography>
          {icon ? (
            <Box
              sx={{
                position: "absolute",
                top: "-20px",
                left: "80%",
                height: "60px",
                width: "60px",
                p: "10px",
                mb: "10px",
                display: "grid",
                placeItems: "center",
                backdropFilter: "blur(30px)",
                bgcolor: "#6ee2ff40",
                borderRadius: "10px",
              }}
            >
              {icon}
            </Box>
          ) : (
            ""
          )}
        </Box>
      </div>
    </>
  );
};

export default Card;

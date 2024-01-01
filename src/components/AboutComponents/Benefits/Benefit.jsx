import { Box, Typography } from "@mui/material";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";
const Benefit = ({ text }) => {
  const [liked, setLiked] = useState(false);

  useState(() => {
    localStorage.setItem("like", liked);
  }, [liked]);

  return (
    <>
      <Box
        sx={{
          height: "350px",
          width: { xs: "100%", sm: "60%", md: "45%", xl:"35%" },
          baclground: "#00000040",
          background:
            "url(https://i.pinimg.com/564x/d7/82/45/d78245269ac022da0904836b53280572.jpg)",
          backgroundSize: "cover",
          borderRadius: "10px",
          display: "flex",
          justifyContent: { xs: "center", md: "flex-end" },
          alignItems: "center",
          m: "15px",
        }}
      >
        <Box
          sx={{
            bgcolor: "#25252520",
            border: "1px solid #ffffff30",
            backdropFilter: "blur(8px)",
            height: "270px",
            width: { xs: "85%", md: "70%" },
            borderRadius: "10px",
            p: "20px",
            pt: "35px",
            position: "relative",
            left: { xs: "0", md: "20%" },
          }}
        >
          <Typography>{text}</Typography>
          <Box
            sx={{
              width: "6%",
              display: "grid",
              placeItems: "center",
              py: "10px",
            }}
            onClick={() => setLiked(!liked)}
          >
            {liked ? (
              <FavoriteIcon
                fontSize="large"
                sx={{ cursor: "pointer", color: "red" }}
              />
            ) : (
              <FavoriteBorderIcon fontSize="large" sx={{ cursor: "pointer" }} />
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Benefit;

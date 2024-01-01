import { Box, Typography } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
const Index = () => {
  return (
    <>
      <Box
        sx={{
          my: "40px",
          height: "40vh",
          backgroundImage:
            "url(https://img.freepik.com/free-photo/glowing-circuit-board-complex-cyborg-brain-design-generated-by-ai_188544-36674.jpg?t=st=1691116606~exp=1691120206~hmac=dfbfa8b087ff39485d2a7917044c304f8e3509cc47dc18a2bb63686d0d4a5dc9&w=1380)",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          display: "grid",
          placeItems: "center",
          cursor: "pointer",
        }}
      >
        <Box
          textAlign={"center"}
          sx={{
            cursor: "pointer",
          }}
        >
          <YouTubeIcon sx={{ fontSize: "80px",cursor: "pointer" }} />
          <Typography fontSize={"30px"}>How I Use It?</Typography>
        </Box>
      </Box>
    </>
  );
};

export default Index;

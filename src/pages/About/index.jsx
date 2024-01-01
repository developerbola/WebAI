import { Box, Container } from "@mui/material";
import {
  Banner,
  Benefits,
  Preview,
} from "../../components/AboutComponents/components";
const Index = () => {
  return (
    <Box>
      <Banner />
      <Box sx={{ px: "20px", display: "grid", placeItems: "center" }}>
        <Benefits />
      </Box>
      <Preview />
    </Box>
  );
};

//

export default Index;

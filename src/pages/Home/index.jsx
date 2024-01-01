import React from "react";
import {
  Banner,
  Cards,
  Preview,
  Skills,
  LastBlogs
} from "../../components/HomeComponents/components";
import { Box } from "@mui/material";
import Aos from "aos";
Aos.init();
const Index = () => {
  return (
    <>
      <Box>
        <Banner />
        <Cards />
        <Preview />
        <LastBlogs />
        <Skills />
      </Box>
    </>
  );
};

export default Index;

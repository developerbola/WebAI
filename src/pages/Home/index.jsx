import React from "react";
import { Banner, Cards, Preview } from "../../components/components";
import { Box } from "@mui/material";
const index = () => {
  return (
    <>
      <Box>
        <Banner />
        <Cards />
        <Preview />
      </Box>
    </>
  );
};

export default index;

import React from "react";
import { Box, CardContent, Typography, Card } from "@mui/material";
import { motion } from "framer-motion";
import MeCard from "./Card/Card";
// Icons
import BoltIcon from "@mui/icons-material/Bolt";
import SearchIcon from "@mui/icons-material/Search";
import SignalWifi0BarIcon from "@mui/icons-material/SignalWifi0Bar";
// CSS
import "./cards.css";
const index = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          flexDirection: { xs: "column", sm: "row" },
          gap: "20px",
          mt: "20px",
          py: "50px",
        }}
      >
        <MeCard
          className="boltIcon"
          text="Fast"
          gradient="#544a7d, #ffd452"
        />

        <MeCard
          className="searchIcon"
          text="Quality"
          gradient="#8360c3,#2ebf91"
        />

        <MeCard
          className="wifiIcon"
          text="Comfortable"
          gradient="#000046,#1CB5E0"
        />
      </Box>
    </>
  );
};

export default index;

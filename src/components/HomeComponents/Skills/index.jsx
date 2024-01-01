import { Box, Typography } from "@mui/material";
import Card from "./Card";
const Index = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        py: "70px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          minHeight: "40vh",
          display: { xs: "block", md: "grid" },
          gridTemplateColumns: "repeat(2, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        <Card
          title={"Fast"}
          body={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, unde?"
          }
          className={"boltIcon"}
          fade={"right"}
        />
        <Card
          title={"Quality"}
          body={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, unde?"
          }
          className={"searchIcon"}
          fade={"right"}
        />
        <Card
          title={"Comfortable"}
          body={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, unde?"
          }
          className={"wifiIcon"}
          fade={"right"}
        />

        <Card
          title={"Fast"}
          body={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, unde?"
          }
          className={"boltIcon"}
          fade={"left"}
        />
        <Card
          title={"Quality"}
          body={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, unde?"
          }
          className={"searchIcon"}
          fade={"left"}
        />
        <Card
          title={"Comfortable"}
          body={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, unde?"
          }
          className={"wifiIcon"}
          fade={"left"}
        />
      </Box>
    </Box>
  );
};

export default Index;

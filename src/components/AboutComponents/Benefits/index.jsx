import { Box } from "@mui/material";
import Benefit from "./Benefit";
const Index = () => {
  return (
    <>
      <Box
        sx={{
          minHeight: "30vh",
          width: "90%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          flexWrap: "wrap",
          my: "40px",
        }}
      >
        {data.map((item) => {
          return <Benefit text={item.text} />;
        })}
      </Box>
    </>
  );
};

const data = [
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Magnam perferendis consequatur non id perspiciatis voluptatum Oditdistinctio nostrum Consectetur",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Magnam perferendis consequatur non id perspiciatis voluptatum Oditdistinctio nostrum Consectetur",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Magnam perferendis consequatur non id perspiciatis voluptatum Oditdistinctio nostrum Consectetur",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Magnam perferendis consequatur non id perspiciatis voluptatum Oditdistinctio nostrum Consectetur",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Magnam perferendis consequatur non id perspiciatis voluptatum Oditdistinctio nostrum Consectetur",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Magnam perferendis consequatur non id perspiciatis voluptatum Oditdistinctio nostrum Consectetur",
  },
];

export default Index;

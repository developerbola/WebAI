import {
  Typography,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Avatar,
  Box,
  Button,
} from "@mui/material";

const Post = ({ title, paragraph, img, createdAt }) => {
  const date = createdAt.slice(0, 10) + " " + createdAt.slice(11, 16);
  return (
    <Card
      sx={{
        maxWidth: 345,
        bgcolor: "#ffffff20",
        borderRadius: "10px",
        mt: "15px",
        mx: "auto",
        minHeight: 495,
      }}
      key={title}
      style={{ cursor: "pointer!important" }}
    >
      <CardHeader
        avatar={
          <Avatar
            alt="developer_bola"
            src="https://media.graphassets.com/GQeLHb9pRB21LSh6Ogmf"
          />
        }
        title={"developer_bola"}
        subheader={date}
      />
      <CardMedia component="img" height="194" image={img} alt="Paella dish" />
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body2" sx={{ mt: "10px" }}>
          {paragraph}
        </Typography>
      </CardContent>
      <Box sx={{ p: "20px", mt: "auto" }}>
        <Button variant="outlined">Show More</Button>
      </Box>
    </Card>
  );
};

export default Post;

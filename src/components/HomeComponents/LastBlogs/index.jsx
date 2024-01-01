import { useState, useEffect } from "react";
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
import { BlogService } from "../../../Services/blog.service";

const Index = () => {
  const [lastBlogs, setLastBlogs] = useState([]);

  useEffect(() => {
    BlogService.lastBlogs(2).then((data) => setLastBlogs(data));
  }, []);

  const blogs = lastBlogs.slice();
  const LastBlogs = blogs.reverse();

  return (
    <>
      <Box
        sx={{
          width: "100%",
          p: "20px",
          zIndex: "10",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: "20px",
          overflow: "scroll",
          mx: "auto",
        }}
      >
        {LastBlogs
          ? LastBlogs.map((item) => {
              return (
                <Card
                  sx={{
                    position: "relative",
                    minWidth: "60%",
                    bgcolor: "#ffffff20",
                    borderRadius: "10px",
                    mt: "15px",
                    mx: "auto",
                    minHeight: 260,
                    height: "500px",
                    display: "flex",
                    p: "20px",
                  }}
                  key={item.slug}
                >
                  <CardMedia
                    component="img"
                    src={item.image.url}
                    alt="blogImage"
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      height: "100%",
                      width: "100%",
                      filter: "brightness(70%)",
                    }}
                  />

                  <CardHeader //Author
                    sx={{ position: "absolute", top: "5px" }}
                    avatar={
                      <Avatar
                        alt="developer_bola"
                        src="https://media.graphassets.com/GQeLHb9pRB21LSh6Ogmf"
                      />
                    }
                    title={"developer_bola"}
                  />
                  <Box
                    sx={{
                      width: { xs: "100%", md: "50%" },
                      height: "100%",
                      zIndex: "10",
                      mt: "120px",
                    }}
                  >
                    <CardContent>
                      <Typography variant="h5">{item.title}</Typography>
                      <Typography variant="body2" sx={{ mt: "10px" }}>
                        {item.paragraph.text}
                      </Typography>
                    </CardContent>
                    <Box sx={{ p: "20px", mt: "auto" }}>
                      <Button variant="outlined">Show More</Button>
                    </Box>
                  </Box>
                </Card>
              );
            })
          : "Loading..."}
      </Box>
    </>
  );
};

export default Index;

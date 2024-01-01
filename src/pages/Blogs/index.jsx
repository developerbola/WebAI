import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import AllBlogs from "../../components/BlogsComponents/AllBlogs";
import LastBlog from "../../components/BlogsComponents/LastBlog";
import { BlogService } from "../../Services/blog.service";
const Index = () => {
  const [blogs, setBlogs] = useState([]);
  const [lastBlogs, setLastBlogs] = useState([]);

  useEffect(() => {
    BlogService.getAllBlogs().then((data) => setBlogs(data));
    BlogService.lastBlogs(2).then((data) => setLastBlogs(data));
  }, []);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "flex-start",
        }}
      >
        <LastBlog lastBlogs={lastBlogs} />
        <AllBlogs blogs={blogs} />
      </Box>
    </>
  );
};

export default Index;

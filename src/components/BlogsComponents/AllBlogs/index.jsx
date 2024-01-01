import { Box } from "@mui/material";
import Post from "./Post";
import Loader from "../../Loader";
import { Link } from "react-router-dom";
const Index = ({ blogs }) => {
  const Blogs = blogs?.slice()
  const reversedBlogs = Blogs.reverse();

  return (
    <>
      <Box
        sx={{
          width: "100%",
          p: "20px",
          minHeight: "20vh",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: { xs: "block", md: "grid" },
            gridTemplateColumns: "repeat(4, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {reversedBlogs.length ? (
            reversedBlogs.map((item) => {
              return (
                <Link to={`/blogs/${item.slug}`}>
                  <Post
                    title={item.title}
                    key={item.title}
                    paragraph={item.paragraph.text}
                    img={item.image.url}
                    createdAt={item.createdAt}
                  />
                </Link>
              );
            })
          ) : (
            <Loader />
          )}
        </Box>
      </Box>
    </>
  );
};

export default Index;

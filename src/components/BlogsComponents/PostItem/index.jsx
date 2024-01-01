import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardHeader,
  Avatar,
  CardContent,
  Container,
  Button,
  Popper,
  Fade,
  Paper,
} from "@mui/material";
import {
  FacebookShareButton,
  FacebookIcon,
  TelegramShareButton,
  TelegramIcon,
  LinkedinShareButton,
  LinkedinIcon,
  InstapaperIcon,
  InstapaperShareButton,
} from "react-share";

import PopupState, { bindToggle, bindPopper } from "material-ui-popup-state";

import { BlogService } from "../../../Services/blog.service";
import Loader from "../../Loader";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";

const Index = () => {
  const { slug } = useParams();

  const [blogs, setBlogs] = useState([]);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    BlogService.bySlug(slug).then((data) => setBlogs(data));
  }, []);

  return (
    <>
      <Container>
        {blogs.length ? (
          blogs.map((item) => {
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
                  cursor: "pointers",
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
                    <Typography variant="h3">{item.title}</Typography>
                    <Typography variant="h6" sx={{ mt: "10px" }}>
                      {item.paragraph.text}
                    </Typography>
                  </CardContent>
                  <Box sx={{ display: "flex", ml: "20px", mt: "30px" }}>
                    <Box
                      sx={{
                        width: "6%",
                        display: "grid",
                        placeItems: "center",
                      }}
                      onClick={() => setLiked(!liked)}
                    >
                      {liked ? (
                        <FavoriteIcon
                          fontSize="large"
                          sx={{ cursor: "pointer", color: "red" }}
                        />
                      ) : (
                        <FavoriteBorderIcon
                          fontSize="large"
                          sx={{ cursor: "pointer" }}
                        />
                      )}
                    </Box>
                    <Box
                      sx={{
                        width: "15%",
                        display: "grid",
                        placeItems: "center",
                      }}
                    >
                      <PopupState variant="popper" popupId="demo-popup-popper">
                        {(popupState) => (
                          <div>
                            <ShareIcon
                              fontSize="large"
                              sx={{ cursor: "pointer" }}
                              {...bindToggle(popupState)}
                            />
                            <Popper {...bindPopper(popupState)} transition>
                              {({ TransitionProps }) => (
                                <Fade {...TransitionProps} timeout={300}>
                                  <Paper
                                    sx={{
                                      bgcolor: "transparent",
                                      display: "flex",
                                      alignItems: "center",
                                      height: "80px",
                                      width: "300px",
                                      p: "10px",
                                      gap: "15px",
                                      borderRadius: "20px",
                                      bgcolor: "#ffffff20",
                                      backdropFilter: "blur(10px)",
                                    }}
                                  >
                                    <FacebookShareButton
                                      url="http://localhost:5173/blogs/new-blog"
                                      quote={"FaceBook"}
                                      hashtag="#AI"
                                      style={{ cursor: "pointer" }}
                                    >
                                      <FacebookIcon size={52} round />
                                    </FacebookShareButton>
                                    <TelegramShareButton
                                      url="http://localhost:5173/blogs/new-blog"
                                      title="WebAI by developer_bola"
                                    >
                                      <TelegramIcon size={52} round />
                                    </TelegramShareButton>

                                    <LinkedinShareButton
                                      url="www.linkedin.com"
                                      quote={"developer_bola!"}
                                      hashtag="#AI"
                                      title="WebAI by developer_bola"
                                    >
                                      <LinkedinIcon size={52} round />
                                    </LinkedinShareButton>

                                    <InstapaperShareButton
                                      quote={"developer_bola!"}
                                      url="http://localhost:5173/blogs/new-blog"
                                      hashtag="#AI"
                                      title="WebAI by developer_bola"
                                    >
                                      <InstapaperIcon size={52} round />
                                    </InstapaperShareButton>
                                  </Paper>
                                </Fade>
                              )}
                            </Popper>
                          </div>
                        )}
                      </PopupState>
                    </Box>
                  </Box>
                </Box>
              </Card>
            );
          })
        ) : (
          <Loader />
        )}
      </Container>
    </>
  );
};

export default Index;

import { useState } from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import FilterButtonGroup from "../common/FilterButtonGroup";
import Post from "../post/Post";
import PropTypes from "prop-types";

const Posts = ({ posts }) => {
  const [currentFilter, setCurrentFilter] = useState("newest");

  const filters = [
    { value: "Most Recent", active: true },
    { value: "Most Liked", active: false },
    { value: "Most Commented", active: false },
  ];

  const sortedPosts = posts.slice().sort((a, b) => {
    if (currentFilter === "Most Recent") {
      return new Date(b.createdAt) - new Date(a.createdAt);
    } else if (currentFilter === "Most Liked") {
      return b.likes - a.likes;
    } else {
      return b.comments - a.comments;
    }
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <FilterButtonGroup
        filters={filters}
        setCurrentFilter={setCurrentFilter}
      />
      {sortedPosts && sortedPosts.length > 0 ? (
        sortedPosts.map((post) => (
          <Grid xs={12} key={post.id}>
            <Post post={post} />
          </Grid>
        ))
      ) : (
        <Grid xs={12}>
          <Card
            variant="outlined"
            sx={{
              borderStyle: "dashed",
              backgroundColor: (theme) => theme.palette.grey[100],
              borderRadius: 2,
              boxShadow: 2,
            }}
          >
            <CardContent>
              <Typography>No posts found. Be the first to post!</Typography>
            </CardContent>
          </Card>
        </Grid>
      )}
    </Box>
  );
};

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      comments: PropTypes.number.isRequired,
      createdAt: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Posts;

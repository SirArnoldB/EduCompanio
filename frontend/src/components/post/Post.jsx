import { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
  styled,
  Collapse,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import PropTypes from "prop-types";
import PostCommentSection from "../common/PostCommentSection";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Post = ({ post }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      variant="outlined"
      sx={{
        borderStyle: "dashed",
        backgroundColor: (theme) => theme.palette.grey[100],
        borderRadius: 2,
        boxShadow: 2,
      }}
    >
      <CardHeader
        avatar={<Avatar>{`${post.user}`}</Avatar>}
        title={post.title}
        subheader={`Posted by ${post.user} | ${new Date(
          post.createdAt
        ).toDateString()}`}
        sx={{
          padding: "16px",
        }}
      />
      <CardContent>
        <Typography>{post.content}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="like">
          <FavoriteIcon /> {post.likes}
        </IconButton>
        <IconButton aria-label="comment">
          <CommentIcon /> {post.comments}
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show comments"
        >
          <CommentIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <PostCommentSection articleId={post.id} />
        </CardContent>
      </Collapse>
    </Card>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Post;

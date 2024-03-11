import { CommentSection } from "replyke";
import PropTypes from "prop-types";

const PostCommentSection = ({ articleId }) => {
  return (
    <CommentSection
      articleId={articleId}
      apiBaseUrl="http://localhost:3000"
      callbacks={{
        loginClickCallback: () => {
          console.log("Login button clicked");
        },
        commentAuthorClickCallback: () => {
          console.log("Comment author clicked");
        },
        currentUserClickCallback: () => {
          console.log("Current user clicked");
        },
      }}
    />
  );
};

PostCommentSection.propTypes = {
  articleId: PropTypes.string.isRequired,
};

export default PostCommentSection;

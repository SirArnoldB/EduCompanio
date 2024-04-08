import { CommentSection } from "replyke";
import PropTypes from "prop-types";

const PostCommentSection = ({ articleId }) => {
  return (
    <CommentSection
      articleId={articleId}
      apiBaseUrl={
        import.meta.env.PROD
          ? import.meta.env.VITE_API_URL_PROD
          : import.meta.env.VITE_API_URL_DEV
      }
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

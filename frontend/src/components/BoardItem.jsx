import {
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";

/**
 * Renders a board item with truncated content and a chip displaying the creation date.
 * @param {Object} props - The props object.
 * @param {Object} props.item - The item object to be displayed.
 * @param {string} props.itemType - The type of item to be displayed.
 * @returns {JSX.Element} - The BoardItem component.
 */
const BoardItem = ({ item, itemType }) => {
  const truncateContent = (content, wordLimit) => {
    const words = content.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    } else {
      return content;
    }
  };

  return (
    <>
      {itemType === "internship" ? (
        <CardHeader title={item.position} subheader={item.company} />
      ) : (
        <CardHeader title={item.title} subheader={item.category} />
      )}
      <CardContent>
        <Typography variant="body2">
          {truncateContent(item.content, 100)}
        </Typography>
      </CardContent>
      <CardActions>
        <Chip
          sx={{
            backgroundColor: "#f5f5f5",
            color: "#000000",
          }}
          label={`Created: ${new Date(Date.now()).toDateString()}`}
        />
      </CardActions>
    </>
  );
};

BoardItem.propTypes = {
  item: PropTypes.object.isRequired,
  itemType: PropTypes.string.isRequired,
};

export default BoardItem;

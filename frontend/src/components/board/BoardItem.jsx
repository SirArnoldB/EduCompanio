import { useContext } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import { BoardContext } from "../../contexts/BoardContext";

/**
 * Renders a board item with truncated content and a chip displaying the creation date.
 * @param {Object} props - The props object.
 * @param {Object} props.item - The item object to be displayed.
 * @param {string} props.itemType - The type of item to be displayed.
 * @returns {JSX.Element} - The BoardItem component.
 */
const BoardItem = ({ item, itemType }) => {
  const [state] = useContext(BoardContext);

  const getItemCategory = (categoryId) => {
    let category = null;
    switch (itemType) {
      case "job":
        category = state.categories.jobs.find(
          (category) => category.id === categoryId
        );
        break;
      case "project":
        category = state.categories.projects.find(
          (category) => category.id === categoryId
        );
        break;
      case "note":
        category = state.categories.notes.find(
          (category) => category.id === categoryId
        );
        break;
      default:
        return "";
    }
    // Check if the category was found before accessing its 'category' property
    return category ? category.category : "";
  };

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
      <Card
        sx={{
          background: "#263B4A",
          color: "#f5f5f5",
        }}
      >
        {itemType === "job" ? (
          <CardHeader title={item.position} subheader={item.company} />
        ) : (
          <CardHeader title={item.title} subheader={item.category} />
        )}
        <CardContent>
          <Typography variant="body2">
            {truncateContent(item.content, 100)}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-end",
            overflow: "auto",
            gap: "0.5rem",
          }}
        >
          <Chip
            sx={{
              backgroundColor: "#f5f5f5",
              color: "#000000",
            }}
            label={`Category: ${getItemCategory(item.categoryId)}`}
          />
          <Chip
            sx={{
              backgroundColor: "#f5f5f5",
              color: "#000000",
            }}
            label={`Updated: ${new Date(Date.now()).toDateString()}`}
          />
        </CardActions>
      </Card>
    </>
  );
};

BoardItem.propTypes = {
  item: PropTypes.object.isRequired,
  itemType: PropTypes.string.isRequired,
};

export default BoardItem;

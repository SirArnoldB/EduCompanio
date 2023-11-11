import { useState } from "react";
import {
  Card,
  CardContent,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Menu,
  CardHeader,
  IconButton,
  CardActions,
  Button,
} from "@mui/material";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PropTypes from "prop-types";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

/**
 * Renders a card displaying the details of an item.
 * @param {Object} props - The component props.
 * @param {Object} props.item - The item to display.
 * @param {string} props.itemType - The type of item to display.
 * @param {Function} props.onEdit - The function to call when the edit button is clicked.
 * @param {Function} props.onDelete - The function to call when the delete button is clicked.
 * @param {Function} props.onClose - The function to call when the close button is clicked.
 * @returns {JSX.Element} - The JSX element representing the ViewItem component.
 */
const ViewItem = ({ item, itemType, onEdit, onDelete, onClose }) => {
  console.log(item);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card
      sx={{
        width: "600px",
        m: 2,
        backgroundColor: "#f5f5f5",
      }}
    >
      <CardHeader
        action={
          <IconButton aria-label="settings" onClick={handleClick}>
            <MoreVertIcon />
          </IconButton>
        }
        title={itemType === "internship" ? item.position : item.title}
        subheader={itemType === "internship" ? item.company : item.category}
      />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => onEdit(item)}>Edit</MenuItem>
        <MenuItem onClick={() => onDelete(item)}>Delete</MenuItem>
      </Menu>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "2rem",
        }}
      >
        <TextareaAutosize
          minRows={5}
          maxRows={20}
          value={item.content}
          style={{
            border: "none",
            outline: "none",
            resize: "none",
            fontSize: "1.5rem",
            fontFamily: "Roboto",
            width: "100%",
          }}
          InputProps={{
            readOnly: true,
          }}
        />
        <FormControl fullWidth>
          <InputLabel id="status-select-label">Status</InputLabel>
          <Select
            labelId="status-select-label"
            id="status-select"
            value={item.status}
            label="Status"
            disabled
          >
            <MenuItem value={"Active"}>Active</MenuItem>
            <MenuItem value={"Inactive"}>Inactive</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="category-select-label">Category</InputLabel>
          <Select
            labelId="category-select-label"
            id="category-select"
            value={item.category}
            label="Category"
            disabled
          >
            <MenuItem value={"💡 Brain Sparks"}>💡 Brain Sparks</MenuItem>
            <MenuItem value={"🔖 Bookmarks"}>🔖 Bookmarks</MenuItem>
            <MenuItem value={"🛠️ Toolbox"}>🛠️ Toolbox</MenuItem>
          </Select>
        </FormControl>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button variant="contained" color="info" onClick={onClose}>
          Close
        </Button>
        <Button
          variant="contained"
          color="info"
          startIcon={<OpenInNewIcon />}
          href={item.link}
          target="_blank"
        >
          Visit Website
        </Button>
      </CardActions>
    </Card>
  );
};

ViewItem.propTypes = {
  item: PropTypes.object.isRequired,
  itemType: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ViewItem;

import { useState } from "react";
import {
  Card,
  CardContent,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  CardActions,
  CardHeader,
} from "@mui/material";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import PropTypes from "prop-types";

/**
 * A component for adding a new item, such as an internship, note, or project.
 * @param {Object} props - The component props.
 * @param {string} props.itemType - The type of item being added.
 * @param {Function} props.onSave - The function to call when the item is saved.
 * @param {Function} props.onCancel - The function to call when the item is cancelled.
 * @returns {JSX.Element} - The AddItem component.
 */
const AddItem = ({ itemType, onSave, onCancel }) => {
  const [content, setContent] = useState();
  const [status, setStatus] = useState();
  const [category, setCategory] = useState();
  const [title, setTitle] = useState();
  const [position, setPosition] = useState();
  const [url, setUrl] = useState();
  const [companyName, setCompanyName] = useState();

  const handleSave = () => {
    if (typeof onSave === "function") {
      onSave({
        title,
        content,
        status,
        category,
        position,
        url,
        companyName,
      });
    } else {
      console.error("onSave is not a function");
    }
  };

  return (
    <Card sx={{ width: 600, m: 2, backgroundColor: "#f5f5f5" }}>
      <CardHeader
        title={`New ${
          itemType === "internship"
            ? "Internship"
            : itemType === "note"
            ? "Note"
            : "Project"
        }`}
      />

      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "2rem",
        }}
      >
        <TextField
          label={itemType === "internship" ? "Position" : "Title"}
          value={itemType === "internship" ? position : title}
          onChange={(e) =>
            itemType === "internship"
              ? setPosition(e.target.value)
              : setTitle(e.target.value)
          }
          fullWidth
        />
        {itemType === "internship" && (
          <TextField
            label="Company Name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            fullWidth
          />
        )}
        {itemType !== "note" && (
          <TextField
            label="URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            fullWidth
          />
        )}
        <TextareaAutosize
          minRows={5}
          maxRows={20}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={{
            border: "none",
            outline: "none",
            resize: "none",
            fontSize: "1.5rem",
            fontFamily: "Roboto",
            width: "100%",
          }}
        />

        <FormControl fullWidth>
          <InputLabel id="status-select-label">Status</InputLabel>
          <Select
            labelId="status-select-label"
            id="status-select"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            label="Status"
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
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            label="Category"
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
        <Button variant="contained" color="info" onClick={handleSave}>
          Save
        </Button>
        <Button variant="outlined" color="error" onClick={onCancel}>
          Cancel
        </Button>
      </CardActions>
    </Card>
  );
};

AddItem.propTypes = {
  itemType: PropTypes.string.isRequired,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default AddItem;

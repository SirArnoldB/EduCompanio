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
} from "@mui/material";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import PropTypes from "prop-types";

/**
 * A component for editing an item.
 * @param {Object} props - The component props.
 * @param {Object} props.item - The item to be edited.
 * @param {string} props.itemType - The type of item being edited.
 * @param {Function} props.onSave - The function to be called when the item is saved.
 * @param {Function} props.onCancel - The function to be called when the editing is cancelled.
 * @returns {JSX.Element} - The EditItem component.
 */
const EditItem = ({ item, itemType, onSave, onCancel }) => {
  const [content, setContent] = useState(item?.content);
  const [status, setStatus] = useState(item?.status);
  const [category, setCategory] = useState(item?.category);
  const [title, setTitle] = useState(item?.title);
  const [position, setPosition] = useState(item?.position);
  const [url, setUrl] = useState(item?.url ?? "");
  const [companyName, setCompanyName] = useState(item?.company ?? "");

  const handleSave = () => {
    if (typeof onSave === "function") {
      onSave({
        ...item,
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

EditItem.propTypes = {
  item: PropTypes.object.isRequired,
  itemType: PropTypes.string.isRequired,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default EditItem;

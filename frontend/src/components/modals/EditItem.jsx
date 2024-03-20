import { useState, useEffect, useContext } from "react";
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
import { BoardContext } from "../../contexts/BoardContext";

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
  const [status, setStatus] = useState(item.statusId || "");
  const [category, setCategory] = useState(item.categoryId || "");
  const [title, setTitle] = useState(item?.title);
  const [position, setPosition] = useState(item?.position);
  const [url, setUrl] = useState(item?.url ?? "");
  const [companyName, setCompanyName] = useState(item?.company ?? "");
  const [statuses, setStatuses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [initialItem, setInitialItem] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useContext(BoardContext);

  useEffect(() => {
    setInitialItem(item);
  }, [item]);

  useEffect(() => {
    switch (itemType) {
      case "job":
        setStatuses(state.statuses.jobs);
        setCategories(state.categories.jobs);
        break;
      case "note":
        setStatuses(state.statuses.notes);
        setCategories(state.categories.notes);
        break;
      case "project":
        setStatuses(state.statuses.projects);
        setCategories(state.categories.projects);
        break;
      default:
        break;
    }
  }, [itemType, state.statuses, state.categories]);

  const handleSave = () => {
    // Check if any changes have been made to the item
    let updatedItem;

    switch (itemType) {
      case "note":
        updatedItem = {
          ...item,
          title,
          content,
          statusId: status,
          categoryId: category,
          updatedAt: "",
        };
        break;
      case "project":
        updatedItem = {
          ...item,
          title,
          content,
          statusId: status,
          categoryId: category,
          url,
          updatedAt: "",
        };
        break;
      case "job":
        updatedItem = {
          ...item,
          title,
          content,
          statusId: status,
          categoryId: category,
          position,
          url,
          company: companyName,
          updatedAt: "",
        };
        break;
      default:
        break;
    }

    // Check if any changes have been made to the item
    if (
      JSON.stringify({ ...initialItem, updatedAt: "" }) ===
      JSON.stringify(updatedItem)
    ) {
      alert("No changes have been made to the item.");
      return;
    }

    onSave(updatedItem);
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
          label={itemType === "job" ? "Position" : "Title"}
          value={itemType === "job" ? position : title}
          onChange={(e) =>
            itemType === "job"
              ? setPosition(e.target.value)
              : setTitle(e.target.value)
          }
          fullWidth
        />
        {itemType === "job" && (
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
            value={statuses.length > 0 ? status : ""}
            onChange={(e) => setStatus(e.target.value)}
            label="Status"
          >
            {statuses.map((status) => (
              <MenuItem key={status.id} value={status.id}>
                {status.status}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="category-select-label">Category</InputLabel>
          <Select
            labelId="category-select-label"
            id="category-select"
            value={categories.length > 0 ? category : ""}
            onChange={(e) => setCategory(e.target.value)}
            label="Category"
          >
            {categories.map((category) => (
              <MenuItem key={category.id} value={category.id}>
                {category.category}
              </MenuItem>
            ))}
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

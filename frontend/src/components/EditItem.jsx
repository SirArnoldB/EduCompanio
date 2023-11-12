import { useState, useEffect } from "react";
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
  CircularProgress,
} from "@mui/material";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import PropTypes from "prop-types";
import StatusesAPI from "../services/statuses";
import CategoriesAPI from "../services/categories";

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
  const [status, setStatus] = useState(item.status_id || "");
  const [category, setCategory] = useState(item.category_id || "");
  const [title, setTitle] = useState(item?.title);
  const [position, setPosition] = useState(item?.position);
  const [url, setUrl] = useState(item?.url ?? "");
  const [companyName, setCompanyName] = useState(item?.company ?? "");
  const [statuses, setStatuses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loadingStatusesAndCategories, setLoadingStatusesAndCategories] =
    useState(true);
  const [initialItem, setInitialItem] = useState({});

  useEffect(() => {
    setInitialItem(item);
  }, [item]);

  useEffect(() => {
    const getStatusesAndCategories = async () => {
      switch (itemType) {
        case "internship": {
          const internshipStatuses =
            await StatusesAPI.getAllInternshipStatuses();
          const internshipCategories =
            await CategoriesAPI.getAllInternshipCategories();
          setStatuses(internshipStatuses);
          setCategories(internshipCategories);
          setLoadingStatusesAndCategories(false);
          break;
        }
        case "note": {
          const noteStatuses = await StatusesAPI.getAllNoteStatuses();
          const noteCategories = await CategoriesAPI.getAllNoteCategories();
          setStatuses(noteStatuses);
          setCategories(noteCategories);
          setLoadingStatusesAndCategories(false);
          break;
        }
        case "project": {
          const projectStatuses = await StatusesAPI.getAllProjectStatuses();
          const projectCategories =
            await CategoriesAPI.getAllProjectCategories();
          setStatuses(projectStatuses);
          setCategories(projectCategories);
          setLoadingStatusesAndCategories(false);
          break;
        }
        default:
          break;
      }
    };
    getStatusesAndCategories();
  }, [itemType]);

  const handleSave = () => {
    if (status === undefined || category === undefined) {
      alert("Please wait for statuses and categories to load before saving.");
      return;
    }

    // Check if any changes have been made to the item
    let updatedItem;

    switch (itemType) {
      case "note":
        updatedItem = {
          ...item,
          title,
          content,
          status_id: status,
          category_id: category,
          updated_at: "",
        };
        break;
      case "project":
        updatedItem = {
          ...item,
          title,
          content,
          status_id: status,
          category_id: category,
          url,
          updated_at: "",
        };
        break;
      case "internship":
        updatedItem = {
          ...item,
          title,
          content,
          status_id: status,
          category_id: category,
          position,
          url,
          company: companyName,
          updated_at: "",
        };
        break;
      default:
        break;
    }

    console.log("Updated item: ", updatedItem);
    console.log("Initial item: ", initialItem);

    // Check if any changes have been made to the item
    if (
      JSON.stringify({ ...initialItem, updated_at: "" }) ===
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
          {loadingStatusesAndCategories ? (
            <CircularProgress />
          ) : (
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
          )}
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="category-select-label">Category</InputLabel>
          {loadingStatusesAndCategories ? (
            <CircularProgress />
          ) : (
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
          )}
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

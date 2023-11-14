import { useState, useEffect } from "react";
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
  CircularProgress,
} from "@mui/material";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PropTypes from "prop-types";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import StatusesAPI from "../services/statuses";
import CategoriesAPI from "../services/categories";

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
  const [anchorEl, setAnchorEl] = useState(null);
  const [statuses, setStatuses] = useState(null);
  const [categories, setCategories] = useState(null);
  const [loadingStatusesAndCategories, setLoadingStatusesAndCategories] =
    useState(true);

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
        <MenuItem onClick={() => onDelete()}>Delete</MenuItem>
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
          readOnly
        />
        <FormControl fullWidth>
          <InputLabel id="status-select-label">Status</InputLabel>
          {loadingStatusesAndCategories ? (
            <CircularProgress />
          ) : (
            <Select
              labelId="status-select-label"
              id="status-select"
              value={item.status_id}
              label="Status"
              disabled
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
              value={item.category_id}
              label="Category"
              disabled
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
        <Button variant="contained" color="info" onClick={onClose}>
          Close
        </Button>
        {itemType !== "note" && (
          <Button
            variant="contained"
            color="info"
            startIcon={<OpenInNewIcon />}
            onClick={() => window.open(item.url, "_blank")}
          >
            Visit Website
          </Button>
        )}
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

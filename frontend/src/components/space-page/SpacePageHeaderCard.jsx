import {
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  CardMedia,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PropTypes from "prop-types";

const SpacePageHeaderCard = ({ title, image_url }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        borderStyle: "dashed",
        backgroundColor: (theme) => theme.palette.grey[100],
        borderRadius: 2,
        boxShadow: 2,
        pb: 2,
      }}
    >
      <CardMedia
        component="img"
        sx={{
          height: 130,
          width: "100%",
          objectFit: "contain",
        }}
        image={image_url || "https://img.icons8.com/doodle/48/community.png"}
        alt={title}
      />
      <CardHeader
        avatar={
          <Avatar
            src={image_url || "https://img.icons8.com/doodle/48/community.png"}
            aria-label={title}
          />
        }
        action={
          <Box
            sx={{
              display: "flex",
              gap: 2,
              alignItems: "center",
            }}
          >
            <Button startIcon={<AddIcon />} variant="outlined" size="medium">
              Add Discussion
            </Button>

            <IconButton aria-label="notifications">
              <NotificationsNoneIcon fontSize="medium" />
            </IconButton>

            <IconButton aria-label="settings">
              <MoreVertIcon fontSize="medium" />
            </IconButton>
          </Box>
        }
        title={title}
      />
    </Card>
  );
};

SpacePageHeaderCard.propTypes = {
  title: PropTypes.string.isRequired,
  image_url: PropTypes.string,
};

export default SpacePageHeaderCard;

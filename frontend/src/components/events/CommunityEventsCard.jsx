import {
  Badge,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import PropTypes from "prop-types";

const CommunityEventsCard = ({ event }) => {
  const {
    title,
    date,
    time,
    location,
    description,
    interest_deadline,
    contact,
    interested,
  } = event;

  return (
    <Card
      variant="outlined"
      sx={{
        maxWidth: 345,
        borderStyle: "dashed",
        backgroundColor: (theme) => theme.palette.grey[100],
        borderRadius: 2,
        boxShadow: 2,
        ml: 1,
      }}
    >
      <CardHeader
        title={`${title.substring(0, 50)}...`}
        subheader={
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 1,
              m: 1,
              mt: 2,
            }}
          >
            <Chip label={date} />
            <Chip label={time} />
            <Chip label={location} />
          </Box>
        }
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description.length > 100
            ? `${description.slice(0, 100)}...`
            : description}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
            mt: 2,
          }}
        >
          <Chip label={`Interest Deadline: ${interest_deadline}`} />
          <Chip label={`Contact: ${contact}`} />
        </Box>
      </CardContent>
      <CardActions
        disableSpacing
        sx={{
          display: "flex",
          justifyContent: "left",
          gap: 1,
        }}
      >
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Badge
          badgeContent={interested}
          color="primary"
          sx={{
            "& .MuiBadge-badge": {
              backgroundColor: (theme) => theme.palette.primary.main,
              mt: 0.5,
            },
          }}
        >
          <IconButton aria-label="Interested">
            <GroupAddIcon />
          </IconButton>
        </Badge>
      </CardActions>
    </Card>
  );
};

CommunityEventsCard.propTypes = {
  event: PropTypes.object.isRequired,
};

export default CommunityEventsCard;

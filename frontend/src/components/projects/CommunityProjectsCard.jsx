import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  IconButton,
  Typography,
} from "@mui/material";
import { Icons8Project } from "../../assets/icons8";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import PropTypes from "prop-types";

const CommunityProjectsCard = ({ project }) => {
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
        sx={{}}
        avatar={<Avatar src={Icons8Project} aria-label="project" />}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={project.title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {project.description.length > 100
            ? `${project.description.slice(0, 100)}...`
            : project.description}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
            mt: 2,
          }}
        >
          <Chip label={`Interest Deadline: ${project.interest_deadline}`} />
          <Chip label={`Contact: ${project.contact}`} />
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
      </CardActions>
    </Card>
  );
};

CommunityProjectsCard.propTypes = {
  project: PropTypes.object.isRequired,
};

export default CommunityProjectsCard;

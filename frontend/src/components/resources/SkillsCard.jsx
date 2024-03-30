import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  IconButton,
  Typography,
} from "@mui/material";
import { Icons8Skills } from "../../assets/icons8";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import PropTypes from "prop-types";
import { useState } from "react";
import ResourcesModal from "../modals/ResourcesModal";

const SkillsCard = ({ skill }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
        avatar={<Avatar src={Icons8Skills} aria-label="skill" />}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={skill.title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {skill.description.length > 100
            ? `${skill.description.slice(0, 100)}...`
            : skill.description}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
            mt: 2,
          }}
        >
          {skill.tags.map((tag, index) => (
            <Chip key={index} label={tag} variant="outlined" size="small" />
          ))}
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
        <Button
          href={skill.url}
          target="_blank"
          variant="outlined"
          color="primary"
          startIcon={<OpenInNewIcon />}
        >
          Visit
        </Button>
        <Button variant="outlined" color="primary" onClick={handleOpen}>
          Details
        </Button>
        <ResourcesModal 
          open ={open}
          handleClose= {handleClose}
          resourceDetails = {skill}
        />
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

SkillsCard.propTypes = {
  skill: PropTypes.object.isRequired,
};

export default SkillsCard;

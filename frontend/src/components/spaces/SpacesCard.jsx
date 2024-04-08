import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
} from "@mui/material";
import PropTypes from "prop-types";
import RouterLink from "../common/RouterLink";

const SpacesCard = ({ space }) => {
  return (
    <RouterLink
      to={`/spaces/${space.id}`}
      style={{
        textDecoration: "none",
      }}
    >
      <Card
        variant="outlined"
        sx={{
          maxWidth: 345,
          borderStyle: "dashed",
          backgroundColor: (theme) => theme.palette.grey[100],
          borderRadius: 2,
          boxShadow: 2,
          ml: 1,
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          cursor: "pointer",
        }}
      >
        <CardMedia
          component="img"
          sx={{
            height: 150,
            objectFit: "contain",
          }}
          image={
            space.image_url || "https://img.icons8.com/doodle/48/community.png"
          }
          alt={space.title}
        />
        <CardHeader title={space.title} />
        <CardContent>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 1,
              mt: 2,
            }}
          >
            <Chip label={`${space.members_count} members`} />
            <Chip label={`${space.posts_count} posts`} />
          </Box>
        </CardContent>
      </Card>
    </RouterLink>
  );
};

SpacesCard.propTypes = {
  space: PropTypes.object.isRequired,
};

export default SpacesCard;

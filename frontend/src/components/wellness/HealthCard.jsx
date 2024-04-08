// import {
//   Avatar,
//   Box,
//   Button,
//   Card,
//   CardActions,
//   CardContent,
//   CardHeader,
//   Chip,
//   IconButton,
//   Typography,
// } from "@mui/material";
// import { Icons8Organization } from "../../assets/icons8";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import PropTypes from "prop-types";
// import OpenInNewIcon from "@mui/icons-material/OpenInNew";

// const HealthCard = ({ health }) => {
//   return (
//     <Card
//       variant="outlined"
//       sx={{
//         maxWidth: 345,
//         borderStyle: "dashed",
//         backgroundColor: (theme) => theme.palette.grey[100],
//         borderRadius: 2,
//         boxShadow: 2,
//         ml: 1,
//       }}
//     >
//       <CardHeader
//         sx={{}}
//         avatar={<Avatar src={Icons8Organization} aria-label="organizations" />}
//         action={
//           <IconButton aria-label="settings">
//             <MoreVertIcon />
//           </IconButton>
//         }
//         title={organization.title}
//       />
//       <CardContent>
//         <Typography variant="body2" color="text.secondary">
//           {health.description.length > 100
//             ? `${health.description.slice(0, 100)}...`
//             : health.description}
//         </Typography>
//         <Box
//           sx={{
//             display: "flex",
//             flexWrap: "wrap",
//             gap: 1,
//             mt: 2,
//           }}
//         >
//           {health.tags.map((tag, index) => (
//             <Chip key={index} label={tag} variant="outlined" size="small" />
//           ))}
//         </Box>
//       </CardContent>
//       <CardActions
//         disableSpacing
//         sx={{
//           display: "flex",
//           justifyContent: "left",
//           gap: 1,
//           ml: 1,
//           mb: 1,
//         }}
//       >
//         <Button
//           href={health.url}
//           target="_blank"
//           variant="outlined"
//           color="primary"
//           startIcon={<OpenInNewIcon />}
//         >
//           Visit
//         </Button>
//         <Button onClick={""} variant="outlined" color="primary">
//           Details
//         </Button>
//       </CardActions>
//     </Card>
//   );
// };

// HealthCard.propTypes = {
//   health: PropTypes.shape({
//     logo_url: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     tags: PropTypes.arrayOf(PropTypes.string).isRequired,
//     url: PropTypes.string.isRequired,
//   }),
// };

// export default HealthCard;

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
import { Icons8Organization } from "../../assets/icons8";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PropTypes from "prop-types";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const HealthCard = ({ organization }) => {
  const { title, description, tags, url } = organization;

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
        avatar={<Avatar src={Icons8Organization} aria-label="organizations" />}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description.length > 100 ? `${description.slice(0, 100)}...` : description}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
            mt: 2,
          }}
        >
          {tags.map((tag, index) => (
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
          ml: 1,
          mb: 1,
        }}
      >
        <Button
          href={url}
          target="_blank"
          variant="outlined"
          color="primary"
          startIcon={<OpenInNewIcon />}
        >
          Visit
        </Button>
        <Button onClick={""} variant="outlined" color="primary">
          Details
        </Button>
      </CardActions>
    </Card>
  );
};

HealthCard.propTypes = {
  organization: PropTypes.shape({
    logo_url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    url: PropTypes.string.isRequired,
  }),
};

export default HealthCard;

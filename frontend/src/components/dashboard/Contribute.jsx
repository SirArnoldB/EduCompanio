import { Button, Card, CardHeader, Paper, Typography } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import PropTypes from "prop-types";

const Contribute = ({ title, subheader, ...other }) => {
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />
      <Paper
        variant="outlined"
        sx={{
          p: 2,
          textAlign: "center",
          borderStyle: "dashed",
          borderRadius: 2,
          boxShadow: 2,
          width: "50%",
          position: "relative",
          right: "25%",
          left: "25%",
          m: 2,
          backgroundColor: (theme) => theme.palette.grey[100],
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold" }}
        >{`Create New`}</Typography>

        <Typography variant="body2">
          {`job, event, project, wellness resource, or other resource.`}
        </Typography>

        <Button
          variant="outlined"
          color="primary"
          startIcon={<AddCircleOutlineIcon />}
          sx={{ mt: 2 }}
        >
          Create Now
        </Button>
      </Paper>
    </Card>
  );
};

Contribute.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
};

export default Contribute;

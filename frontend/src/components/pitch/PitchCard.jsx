import { Button, Card, CardActions, CardHeader } from "@mui/material";
import PropTypes from "prop-types";

const PitchCard = ({ title, subtitle, callToAction, openModal }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        borderStyle: "dashed",
        backgroundColor: (theme) => theme.palette.grey[100],
        borderRadius: 2,
        boxShadow: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        p: 2,
      }}
    >
      <CardHeader title={title} subheader={subtitle} />
      <CardActions>
        <Button onClick={openModal} variant="outlined" color="primary">
          {callToAction}
        </Button>
      </CardActions>
    </Card>
  );
};

PitchCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  callToAction: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default PitchCard;

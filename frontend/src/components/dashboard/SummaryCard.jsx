import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const SummaryCard = ({ title, subtitle, icon }) => {
  return (
    <Card
      component={Stack}
      spacing={3}
      direction="row"
      sx={{
        px: 3,
        py: 5,
        borderRadius: 2,
        width: "100%",
        height: "100%",
      }}
    >
      {icon && <Box sx={{ width: 64, height: 64 }}>{icon}</Box>}
      <Stack spacing={0.5}>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="subtitle2" sx={{ color: "text.disabled" }}>
          {subtitle}
        </Typography>
      </Stack>
    </Card>
  );
};

SummaryCard.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default SummaryCard;

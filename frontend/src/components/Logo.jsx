import PropTypes from "prop-types";
import { forwardRef } from "react";

import { Link, Box } from "@mui/material";
import RouterLink from "./RouterLink";
import { useTheme } from "@mui/material/styles";

// eslint-disable-next-line react/display-name
const Logo = forwardRef(({ disabledLink = false, sx }, ref) => {
  const theme = useTheme();

  const logo = (
    <Box
      ref={ref}
      component="img"
      src="../../public/logo/png/logo-no-background.png"
      sx={{
        cursor: "pointer",
        ...sx,
        width: theme.spacing(20),
      }}
    />
  );

  if (disabledLink) {
    return logo;
  }

  return (
    <Link component={RouterLink} href="/" sx={{ display: "contents" }}>
      {logo}
    </Link>
  );
});

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default Logo;

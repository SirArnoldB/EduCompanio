import PropTypes from "prop-types";
import { forwardRef, useContext } from "react";
import { Link, Box } from "@mui/material";
import RouterLink from "./RouterLink";
import { useTheme } from "@mui/material/styles";
import { LogoNoBackground } from "../assets";
import { BoardContext } from "../contexts/BoardContext";

// eslint-disable-next-line react/display-name
const Logo = forwardRef(({ disabledLink = false, sx }, ref) => {
  const [state] = useContext(BoardContext);
  const theme = useTheme();

  const logo = (
    <Box
      ref={ref}
      component="img"
      src={LogoNoBackground}
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

  const logUrl = state.user.uid ? "/dashboard" : "/";

  return (
    <Link component={RouterLink} href={logUrl} sx={{ display: "contents" }}>
      {logo}
    </Link>
  );
});

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default Logo;

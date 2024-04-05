import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  MenuItem,
  useMediaQuery,
  useTheme,
  IconButton,
  Popover,
  Link,
} from "@mui/material";
import Logo from "../common/Logo";
import { HEADER } from "../../layouts/dashboard/config-layout";
import { useResponsive } from "../../hooks/useResponsive";
import { bgBlur } from "../../theme/css";
import Iconify from "../common/Iconify";

const menuOptions = [
  {
    label: "Home",
    link: "#home",
  },
  {
    label: "Features",
    link: "#features",
  },
  {
    label: "Mission",
    link: "#mission",
  },
  {
    label: "Contact Us",
    link: "#contact-us",
  },
  {
    label: "Login",
    link: "/login",
  },
];

const LandingPageAppBar = () => {
  const [open, setOpen] = useState(null);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const navigate = useNavigate();
  const lgUp = useResponsive("up", "lg");

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: "none",
          height: HEADER.H_MOBILE,
          zIndex: theme.zIndex.appBar + 1,
          ...bgBlur({
            color: theme.palette.background.default,
          }),
          transition: theme.transitions.create(["height"], {
            duration: theme.transitions.duration.shorter,
          }),
          ...(lgUp && {
            height: HEADER.H_DESKTOP,
          }),
        }}
      >
        <Toolbar
          sx={{
            height: 1,
          }}
        >
          <Logo />
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "flex-end",
              gap: 3,
            }}
          >
            {matches ? (
              <>
                <IconButton
                  aria-label="menu"
                  aria-controls="menu"
                  aria-haspopup="true"
                  onClick={handleOpen}
                >
                  <Iconify icon="eva:menu-2-fill" />
                </IconButton>

                <Popover
                  open={!!open}
                  anchorEl={open}
                  onClose={handleClose}
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  transformOrigin={{ vertical: "top", horizontal: "right" }}
                >
                  {menuOptions.map((option) => (
                    <MenuItem key={option.label}>
                      <Link href={option.link} sx={{ textDecoration: "none" }}>
                        {option.label}
                      </Link>
                    </MenuItem>
                  ))}
                </Popover>
              </>
            ) : (
              <>
                {menuOptions.map((option, index) => (
                  <Link
                    key={index}
                    href={option.link}
                    sx={{ textDecoration: "none" }}
                  >
                    <Button
                      key={option.label}
                      onClick={() => navigate(option.link)}
                      sx={{
                        color: (theme) => theme.palette.text.primary,
                        "&:hover": {
                          color: (theme) => theme.palette.primary.main,
                        },
                        "&:focus": {
                          color: (theme) => theme.palette.primary.main,
                          borderBottom: `2px solid ${theme.palette.primary.main}`,
                        },
                      }}
                    >
                      {option.label}
                    </Button>
                  </Link>
                ))}
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default LandingPageAppBar;

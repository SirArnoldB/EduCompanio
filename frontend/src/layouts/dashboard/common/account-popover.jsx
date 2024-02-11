import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BoardContext } from "../../../contexts/BoardContext";
import { getAuth } from "firebase/auth";
import { app } from "../../../firebase/firebase";

import {
  Avatar,
  Divider,
  Popover,
  MenuItem,
  IconButton,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { alpha } from "@mui/material/styles";

const MENU_OPTIONS = [
  {
    label: "Home",
    icon: "eva:home-fill",
    url: "/dashboard",
  },
  {
    label: "Profile",
    icon: "eva:person-fill",
    url: "/profile",
  },
  {
    label: "Settings",
    icon: "eva:settings-2-fill",
    url: "/settings",
  },
];

export default function AccountPopover() {
  const [open, setOpen] = useState(null);
  const [state, dispatch] = useContext(BoardContext);

  const handleLogout = () => {
    // Dispatch SIGN_OUT action
    dispatch({ type: "SIGN_OUT" });

    // Sign out from Firebase
    getAuth(app)
      .signOut()
      .then(() => {
        console.log("User signed out");
      })
      .catch((error) => {
        console.log("Error signing out: ", error);
      });

    // Navigate to landing page
    navigate("/");
  };

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };
  const navigate = useNavigate();

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          width: 40,
          height: 40,
          background: (theme) => alpha(theme.palette.grey[500], 0.08),
          ...(open && {
            background: (theme) =>
              `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
          }),
        }}
      >
        <Avatar
          src={state.user.photoURL}
          alt={state.user.displayName}
          sx={{
            width: 36,
            height: 36,
            border: (theme) => `solid 2px ${theme.palette.background.default}`,
          }}
        >
          {state.user.displayName?.charAt(0)}
        </Avatar>
      </IconButton>

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1,
            ml: 0.75,
            width: 200,
          },
        }}
      >
        <Box sx={{ my: 1.5, px: 2 }}>
          <Typography variant="subtitle2" noWrap>
            {state.user?.displayName}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
            {`${state.user.email?.toLowerCase()}`}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: "dashed" }} />

        {MENU_OPTIONS.map((option) => (
          <MenuItem key={option.label} onClick={() => navigate(option.url)}>
            {option.label}
          </MenuItem>
        ))}

        <Divider sx={{ borderStyle: "dashed", m: 0 }} />

        <MenuItem disableRipple disableTouchRipple>
          <Button onClick={handleLogout} color="error">
            Logout
          </Button>
        </MenuItem>
      </Popover>
    </>
  );
}

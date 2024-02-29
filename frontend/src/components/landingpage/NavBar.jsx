import { useContext } from "react";
import { Link, Stack } from "@mui/material";
import { LogoNoBackground } from "../../assets/index.js";
import { BoardContext } from "../../contexts/BoardContext.jsx";

const NavBar = () => {
  const [state, dispatch] = useContext(BoardContext);

  const handleSignInClick = () => {
    dispatch({ type: "SET_LOADING", payload: true });

    window.location.href = `/login`;
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "fixed",
        background: "#152246e7",
        top: 0,
        right: 0,
        left: 0,
        zIndex: 1030,
        justifyContent: "space-between",
      }}
    >
      <Link
        href="/"
        style={{
          display: "flex",
          textDecoration: "none",
          color: "#fff",
          fontWeight: "600",
          alignItems: "center",
        }}
      >
        <img src={LogoNoBackground} className="logo" alt="logo" height={45} />
      </Link>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link
          href="#features"
          color="#ffffff"
          sx={{ textDecoration: "none", fontWeight: "700" }}
        >
          Features
        </Link>
        <Link
          href="#testimonials"
          color="#ffffff"
          sx={{ textDecoration: "none", fontWeight: "700" }}
        >
          Testimonials
        </Link>
        <Link
          href="#sponsors"
          color="#ffffff"
          sx={{ textDecoration: "none", fontWeight: "700" }}
        >
          Sponsors
        </Link>
        <Link
          onClick={() => handleSignInClick()}
          color="#ffffff"
          sx={{
            textDecoration: "none",
            color: "#152246",
            fontWeight: "700",
            backgroundColor: "#f1f1f1",
            padding: "5px 5px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Sign In
        </Link>
      </Stack>
    </Stack>
  );
};

export default NavBar;

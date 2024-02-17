import { useContext, useEffect } from "react";
import firebase from "firebase/compat/app";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import { app } from "../firebase/firebase";
import { getAuth } from "firebase/auth";
import { Box, Typography, Paper } from "@mui/material";
import { BoardContext } from "../contexts/BoardContext";
import LoadingSpinner from "../components/LoadingSpinner";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useContext(BoardContext);
  const navigate = useNavigate();

  useEffect(() => {
    const ui =
      firebaseui.auth.AuthUI.getInstance() ||
      new firebaseui.auth.AuthUI(getAuth(app));

    ui.start("#firebaseui-auth-container", {
      // callbacks
      callbacks: {
        signInSuccessWithAuthResult: (
          authResult,
          redirectURL = "/dashboard"
        ) => {
          const user = authResult.user;

          // Dispatch SIGN_IN action
          dispatch({ type: "SIGN_IN", payload: user });

          // Dispatch LOAD_USER_DATA action
          dispatch({ type: "LOAD_USER_DATA", payload: true });

          // Redirect to dashboard when loading is complete
          navigate(redirectURL);

          return false;
        },
      },
      signInFlow: "popup",
      signInOptions: [
        {
          provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID,
          customParameters: {
            // Forces account selection even when one account
            // is available.
            prompt: "select_account",
          },
        },
        {
          provider: firebase.auth.GithubAuthProvider.PROVIDER_ID,
          clientId: import.meta.env.VITE_GITHUB_CLIENT_ID,
          customParameters: {
            // Forces account selection even when one account
            // is available.
            prompt: "select_account",
          },
        },
        {
          provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
        },
      ],
      // required to enable one-tap sign-up credential helper
      credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        bgcolor: "background.default",
      }}
    >
      <Paper
        sx={{
          width: "50%",
          height: "50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
        }}
      >
        {state.LOAD_USER_DATA ? (
          <LoadingSpinner label="account" />
        ) : (
          <>
            <Typography variant="h4" sx={{ textAlign: "center" }}>
              Sign In
            </Typography>
            <Box id="firebaseui-auth-container" />
          </>
        )}
      </Paper>
    </Box>
  );
};

export default LoginPage;

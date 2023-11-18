import { useContext } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { BoardContext } from "../contexts/BoardContext";

const IndexView = () => {
  const [state, dispatch] = useContext(BoardContext);

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        {state.user.username
          ? `Hi ${state.user.username}, Welcome back to EduCompanio!`
          : "Welcome to EduCompanio!"}
      </Typography>
    </Container>
  );
};

export default IndexView;

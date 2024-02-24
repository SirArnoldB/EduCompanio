import { useContext } from "react";
import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Contribute from "../components/dashboard/Contribute";
import Explore from "../components/dashboard/Explore";
import { BoardContext } from "../contexts/BoardContext";
import LoadingSpinner from "../components/common/LoadingSpinner";
import DashboardStats from "../components/dashboard/DashboardStats";
import Favorites from "../components/dashboard/Favorites";
import PopularAndTrending from "../components/dashboard/PopularAndTrending";

const IndexView = () => {
  const [state] = useContext(BoardContext);

  return (
    <>
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          {state.user.displayName
            ? `Hi ${state.user.displayName}, 👋 welcome back!`
            : "Welcome back!"}
        </Typography>

        {state.LOAD_USER_DATA ? (
          <LoadingSpinner label="your account ..." />
        ) : (
          <Grid container spacing={3}>
            {/* Dashboard Summary Info */}
            <DashboardStats />

            {/* Explore Section */}
            <Grid xs={12} md={6} lg={8}>
              <Explore title={"Explore"} subheader={"Recommended for you!"} />
            </Grid>

            {/* Favorites & Popular and Trending */}
            <Grid xs={12} md={6} lg={4}>
              <Favorites />
              <PopularAndTrending />
            </Grid>

            {/* Recommendations */}
            <Grid xs={12} md={6} lg={8}>
              <Contribute
                title={"Contribute"}
                subheader={"Contribute to the community!"}
              />
            </Grid>
          </Grid>
        )}
      </Container>
    </>
  );
};

export default IndexView;

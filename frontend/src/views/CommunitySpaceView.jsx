import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import LoadingSpinner from "../components/common/LoadingSpinner";
import PropTypes from "prop-types";
import SpacePageHeaderCard from "../components/space-page/SpacePageHeaderCard";

const CommunitySpaceView = ({ space }) => {
  return (
    <>
      <Container maxWidth="xl">
        {!space ? (
          <LoadingSpinner label="your space ..." />
        ) : (
          <Grid container spacing={3}>
            {/* Space Card Title and Banner */}
            <Grid item xs={12} sm={12} md={12}>
              <SpacePageHeaderCard
                title={space.title}
                image_url={space.image_url}
              />
            </Grid>

            {/* Posts Section */}
            <Grid xs={12} md={6} lg={8}>
              <Card>
                <CardHeader title={"Posts"} />
                <CardContent>
                  <Typography>
                    {`Welcome to ${space.title} posts section.`}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Discussion Guidelines and Tags Section */}
            <Grid
              xs={12}
              md={6}
              lg={4}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
              }}
            >
              {/* Discussion Guidelines */}
              <Grid xs={12} md={6} lg={4}>
                <Card>
                  <CardHeader title={"Discussion Guidelines"} />
                  <CardContent>
                    <Typography>
                      {`Welcome to ${space.title} discussion guidelines.`}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              {/* Tags Section */}
              <Grid xs={12} md={6} lg={4}>
                <Card>
                  <CardHeader title={"Tags Section"} />
                  <CardContent>
                    <Typography>
                      {`Welcome to ${space.title} tags section.`}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        )}
      </Container>
    </>
  );
};

CommunitySpaceView.propTypes = {
  space: PropTypes.object.isRequired,
};

export default CommunitySpaceView;

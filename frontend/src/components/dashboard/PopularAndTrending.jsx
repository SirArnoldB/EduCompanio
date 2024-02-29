import { Box, Card, CardHeader, Typography } from "@mui/material";

const PopularAndTrending = () => {
  return (
    <Card
      sx={{
        height: "auto",
        mt: 2,
      }}
    >
      <CardHeader title="Popular and Trending" />
      <Box p={3}>
        <Typography variant="body1">
          All the popular and trending jobs, projects, events, and resources
          will be displayed here.
        </Typography>
      </Box>
    </Card>
  );
};

export default PopularAndTrending;

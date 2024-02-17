import { useContext } from "react";
import { BoardContext } from "../contexts/BoardContext";
import {
  VictoryPie,
  VictoryChart,
  VictoryBar,
  VictoryContainer,
} from "victory";
import { Grid, Card, CardContent, CardHeader, Divider } from "@mui/material";

const DashboardStats = () => {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useContext(BoardContext);

  // Calculate the distribution of projects across different statuses
  const projectStatusDistribution = Object.keys(state.columns.projects)
    .map((statusId) => {
      const statusName = state.statuses.projects.find(
        (status) => status.id === statusId
      ).status;
      const itemCount = state.columns.projects[statusId].items.length;
      return { status: statusName, count: itemCount };
    })
    .filter((item) => item.count > 0);

  // Calculate the distribution of projects across different categories
  const projectCategoryDistribution = state.categories.projects.map(
    (category) => {
      const itemCount = Object.keys(state.columns.projects).reduce(
        (total, statusId) => {
          return (
            total +
            state.columns.projects[statusId].items.filter(
              (item) => item.category_id === category.id
            ).length
          );
        },
        0
      );
      return { category: category.category, count: itemCount };
    }
  );

  // Calculate the distribution of internships across different statuses
  const internshipStatusDistribution = Object.keys(state.columns.internships)
    .map((statusId) => {
      const statusName = state.statuses.internships.find(
        (status) => status.id === statusId
      ).status;
      const itemCount = state.columns.internships[statusId].items.length;
      return { status: statusName, count: itemCount };
    })
    .filter((item) => item.count > 0);

  // Calculate the distribution of internships across different categories
  const internshipCategoryDistribution = state.categories.internships.map(
    (category) => {
      const itemCount = Object.keys(state.columns.internships).reduce(
        (total, statusId) => {
          return (
            total +
            state.columns.internships[statusId].items.filter(
              (item) => item.category_id === category.id
            ).length
          );
        },
        0
      );
      return { category: category.category, count: itemCount };
    }
  );

  // Calculate the distribution of notes across different statuses
  const noteStatusDistribution = Object.keys(state.columns.notes)
    .map((statusId) => {
      const statusName = state.statuses.notes.find(
        (status) => status.id === statusId
      ).status;
      const itemCount = state.columns.notes[statusId].items.length;
      return { status: statusName, count: itemCount };
    })
    .filter((item) => item.count > 0);

  // Calculate the distribution of notes across different categories
  const noteCategoryDistribution = state.categories.notes.map((category) => {
    const itemCount = Object.keys(state.columns.notes).reduce(
      (total, statusId) => {
        return (
          total +
          state.columns.notes[statusId].items.filter(
            (item) => item.category_id === category.id
          ).length
        );
      },
      0
    );
    return { category: category.category, count: itemCount };
  });

  return (
    <Grid container spacing={3}>
      <Grid item xs={4} md={4}>
        <Card>
          <CardHeader
            title="Internships Statistics"
            subheader={`Total Internships: ${state.counts.internships}`}
          />
          <Divider />
          <CardContent>
            {/* Pie chart for internship status distribution */}
            <VictoryPie
              containerComponent={
                <VictoryContainer
                  title="Status Distributions"
                  desc="A pie chart showing status distributions"
                />
              }
              data={internshipStatusDistribution}
              x="status"
              y="count"
            />

            {/* Bar chart for internship category distribution */}
            <VictoryChart domainPadding={20}>
              <VictoryBar
                horizontal
                data={internshipCategoryDistribution}
                x="category"
                y="count"
              />
            </VictoryChart>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4} md={4}>
        <Card>
          <CardHeader
            title="Notes Statistics"
            subheader={`Total Notes: ${state.counts.notes}`}
          />
          <Divider />
          <CardContent>
            {/* Pie chart for note status distribution */}
            <VictoryPie
              containerComponent={
                <VictoryContainer
                  title="Status Distributions"
                  desc="A pie chart showing status distributions"
                />
              }
              data={noteStatusDistribution}
              x="status"
              y="count"
            />

            {/* Bar chart for note category distribution */}
            <VictoryChart domainPadding={20}>
              <VictoryBar
                data={noteCategoryDistribution}
                x="category"
                y="count"
              />
            </VictoryChart>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4} md={4}>
        <Card>
          <CardHeader
            title="Projects Statistics"
            subheader={`Total Projects: ${state.counts.projects}`}
          />
          <Divider />
          <CardContent>
            {/* Pie chart for project status distribution */}
            <VictoryPie
              containerComponent={
                <VictoryContainer
                  title="Status Distributions"
                  desc="A pie chart showing status distributions"
                />
              }
              data={projectStatusDistribution}
              x="status"
              y="count"
            />

            {/* Bar chart for project category distribution */}
            <VictoryChart domainPadding={20}>
              <VictoryBar
                data={projectCategoryDistribution}
                x="category"
                y="count"
              />
            </VictoryChart>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default DashboardStats;

import { useContext } from "react";
import { BoardContext } from "../../contexts/BoardContext";
import Grid from "@mui/material/Unstable_Grid2";
import SummaryCard from "./SummaryCard";
import {
  Icons8Events,
  Icons8Jobs,
  Icons8Notes,
  Icons8Project,
} from "../../assets/icons8";

const DashboardStats = () => {
  const [state] = useContext(BoardContext);

  const DashboardStatsInfo = [
    {
      title: `${state.counts.notes}`,
      subtitle: `Total Notes`,
      icon: <img src={Icons8Notes} alt="notes" />,
    },
    {
      title: `${state.counts.projects}`,
      subtitle: `Total Projects`,
      icon: <img src={Icons8Project} alt="projects" />,
    },
    {
      title: `${state.counts.jobs}`,
      subtitle: `Total Jobs`,
      icon: <img src={Icons8Jobs} alt="jobs" />,
    },
    {
      title: `${state.counts?.events ?? 0}`,
      subtitle: `Total Events`,
      icon: <img src={Icons8Events} alt="events" />,
    },
  ];

  return (
    <>
      {DashboardStatsInfo.map((item, index) => (
        <Grid xs={12} sm={6} md={3} key={index}>
          <SummaryCard {...item} />
        </Grid>
      ))}
    </>
  );
};

export default DashboardStats;

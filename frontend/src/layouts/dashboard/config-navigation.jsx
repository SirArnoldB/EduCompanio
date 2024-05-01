import { SvgIcon } from "@mui/material";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import NotesRoundedIcon from "@mui/icons-material/NotesRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";
import WorkspacesRoundedIcon from "@mui/icons-material/WorkspacesRounded";
import EventAvailableRoundedIcon from "@mui/icons-material/EventAvailableRounded";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import HandymanIcon from "@mui/icons-material/Handyman";

const icon = (muiIcon) => <SvgIcon component={muiIcon} />;

const navConfig = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: icon(DashboardRoundedIcon),
  },
  {
    title: "Notes",
    path: "/notes",
    icon: icon(NotesRoundedIcon),
  },
  {
    title: "Jobs",
    path: "/jobs",
    icon: icon(WorkRoundedIcon),
  },
  {
    title: "Projects",
    path: "/projects",
    icon: icon(RocketLaunchRoundedIcon),
  },
  {
    title: "resources",
    path: "/resources",
    icon: icon(HandymanIcon),
  },
  {
    title: "Events",
    path: "/events",
    icon: icon(EventAvailableRoundedIcon),
  },
  {
    title: "Spaces",
    path: "/spaces",
    icon: icon(WorkspacesRoundedIcon),
  },
  {
    title: "Pitch",
    path: "/pitch",
    icon: icon(AutoAwesomeIcon),
  },
];

export default navConfig;

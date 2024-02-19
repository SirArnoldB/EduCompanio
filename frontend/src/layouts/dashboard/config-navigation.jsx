import SvgColor from "../../components/common/SvgColor";

const icon = (name) => (
  <SvgColor src={`${name}`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: icon(""),
  },
  {
    title: "Notes",
    path: "/notes",
    icon: icon(""),
  },
  {
    title: "Internships",
    path: "/internships",
    icon: icon(""),
  },
  {
    title: "Projects",
    path: "/projects",
    icon: icon(""),
  },
  {
    title: "resources",
    path: "/resources",
    icon: icon(""),
  },
  {
    title: "Events",
    path: "/events",
    icon: icon(""),
  },
  {
    title: "Wellness",
    path: "/wellness",
    icon: icon(""),
  },
];

export default navConfig;

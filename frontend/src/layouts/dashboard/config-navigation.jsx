import SvgColor from "../../components/SvgColor";

const icon = (name) => (
  <SvgColor src={`${name}`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: "Dashboard",
    path: "/",
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
];

export default navConfig;

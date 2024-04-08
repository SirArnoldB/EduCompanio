// import { Grid, Typography } from "@mui/material";
// import TabsSection from "../tabs/TabsSection";
// import Health from "./Health";
// import Skills from "./Skills";


// const wellnessTabs = [
//   {
//     label: "Health",
//     content: <Health/>,
//     icon: "",
//   },
//   {
//     label: "Finance",
//     content: <Skills/>,
//     icon: "",
//   },
// ];

// const WellnessTabs = () => {
//   return (
//     <Grid item xs={12}>
//       <TabsSection tabs={wellnessTabs} />
//     </Grid>
//   );
// };

// export default WellnessTabs;

// import { Grid } from "@mui/material";
// import TabsSection from "../tabs/TabsSection";
// import Health from "./Health";
// import Skills from "./Finance";

// const wellnessTabs = [
//   {
//     label: "Health",
//     content: <Health />,
//     icon: "",
//   },
//   {
//     label: "Finance",
//     content: <Finance/>,
//     icon: "",
//   },
// ];

// const WellnessTabs = () => {
//   return (
//     <Grid item xs={12}>
//       <TabsSection tabs={wellnessTabs} />
//     </Grid>
//   );
// };

// export default WellnessTabs;

import { Grid } from "@mui/material";
import TabsSection from "../tabs/TabsSection";
import Health from "./Health";
import Finance from "./Finance";

const wellnessTabs = [
  {
    label: "Health",
    content: <Health />,
    icon: "",
  },
  {
    label: "Finance",
    content: <Finance />,
    icon: "",
  },
];

const WellnessTabs = () => {
  return (
    <Grid item xs={12}>
      <TabsSection tabs={wellnessTabs} />
    </Grid>
  );
};

export default WellnessTabs;

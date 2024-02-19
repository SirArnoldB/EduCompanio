import { useState } from "react";
import { Box, Card, Tab, Tabs, useTheme } from "@mui/material";
import PropTypes from "prop-types";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`games-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const a11yProps = (index) => {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
};

const TabsSection = ({ tabs }) => {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card>
      <Box sx={{ p: 3 }}>
        {" "}
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="tabs"
          sx={{
            borderBottom: 1,
            borderColor: "divider",
          }}
        >
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              label={tab.label}
              icon={tab.icon ? tab.icon : null}
              {...a11yProps(index)}
            />
          ))}
        </Tabs>
        <Box>
          {tabs.map((tab, index) => (
            <TabPanel
              key={index}
              value={value}
              index={index}
              dir={theme.direction}
            >
              {tab.content}
            </TabPanel>
          ))}
        </Box>
      </Box>
    </Card>
  );
};

TabsSection.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
      icon: PropTypes.node.isRequired,
    })
  ).isRequired,
};

export default TabsSection;

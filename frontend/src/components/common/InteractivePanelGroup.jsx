import { useState } from "react";
import { Typography, Tabs, Tab } from "@mui/material";
import MonacoEditor from "./MonacoEditor";
import { PanelGroup, Panel } from "react-resizable-panels";
import ResizeHandle from "./ResizeHandle";

import styles from "../../css/panel.module.css";
import AIChat from "../interview-prep/AIChat";

const InteractivePanelGroup = () => {
  const [panelSizes, setPanelSizes] = useState([20, 50, 30]);
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handlePanelResize = (newSizes) => {
    setPanelSizes(newSizes);
  };

  return (
    <PanelGroup
      direction="horizontal"
      onResize={handlePanelResize}
      autoSaveId={"interactive-panel-group"}
    >
      <Panel className={styles.Panel} size={panelSizes[0]} minSize={20}>
        <div className={styles.PanelContent}>Question</div>
      </Panel>
      <ResizeHandle />
      <Panel className={styles.Panel} size={panelSizes[1]} minSize={30}>
        <div className={styles.PanelContent}>
          <MonacoEditor className={styles.PanelContent} />
        </div>
      </Panel>
      <ResizeHandle />
      <Panel className={styles.Panel} size={panelSizes[2]} minSize={20}>
        <div className={styles.PanelContent}>
          <Tabs value={tabValue} onChange={handleTabChange}>
            <Tab label="Chat" />
            <Tab label="Evaluation" />
          </Tabs>
          {tabValue === 0 && <AIChat />}
          {tabValue === 1 && (
            <Typography>See your evaluation and feedback here</Typography>
          )}
        </div>
      </Panel>
    </PanelGroup>
  );
};

export default InteractivePanelGroup;

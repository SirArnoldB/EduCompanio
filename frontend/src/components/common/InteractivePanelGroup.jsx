import { useContext, useState } from "react";
import { Typography, Tabs, Tab, Box } from "@mui/material";
import MonacoEditor from "./MonacoEditor";
import { PanelGroup, Panel } from "react-resizable-panels";
import ResizeHandle from "./ResizeHandle";
import { MuiMarkdown } from "mui-markdown";

import styles from "../../css/panel.module.css";
import { BoardContext } from "../../contexts/BoardContext";
import InterviewChat from "../pitch/InterviewChat";

const InteractivePanelGroup = () => {
  const [state] = useContext(BoardContext);
  const [panelSizes, setPanelSizes] = useState([20, 50, 30]);
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handlePanelResize = (newSizes) => {
    setPanelSizes(newSizes);
  };

  const formatQuestion = (question) => {
    const renderValue = (value) => {
      return <Typography>{value}</Typography>;
    };

    return (
      <Box sx={{ m: 2 }}>
        {Object.entries(question).map(([key, value], index) => (
          <Box key={index} mt={2}>
            <Typography variant="subtitle1" gutterBottom>
              {key.charAt(0).toUpperCase() + key.slice(1)}:
            </Typography>
            {renderValue(value)}
          </Box>
        ))}
      </Box>
    );
  };

  return (
    <PanelGroup
      direction="horizontal"
      onResize={handlePanelResize}
      autoSaveId={"interactive-panel-group"}
    >
      <Panel className={styles.Panel} size={panelSizes[0]} minSize={20}>
        <Box className={styles.PanelContent}>
          {state.interviewQuestion ? (
            <MuiMarkdown>{state.interviewQuestion.question}</MuiMarkdown>
          ) : (
            <MuiMarkdown>No question available</MuiMarkdown>
          )}
        </Box>
      </Panel>
      <ResizeHandle />
      <Panel className={styles.Panel} size={panelSizes[1]} minSize={30}>
        <Box className={styles.PanelContent}>
          <MonacoEditor className={styles.PanelContent} />
        </Box>
      </Panel>
      <ResizeHandle />
      <Panel className={styles.Panel} size={panelSizes[2]} minSize={20}>
        <Box className={styles.PanelContent}>
          <Tabs value={tabValue} onChange={handleTabChange}>
            <Tab label="Chat" />
            <Tab label="Evaluation" />
          </Tabs>
          {tabValue === 0 && <InterviewChat />}
          {tabValue === 1 && (
            <Typography>See your evaluation and feedback here</Typography>
          )}
        </Box>
      </Panel>
    </PanelGroup>
  );
};

export default InteractivePanelGroup;

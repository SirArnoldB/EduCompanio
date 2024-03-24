import Editor from "@monaco-editor/react";
import { Box } from "@mui/material";
import { useState } from "react";

const MonacoEditor = () => {
  const [theme, setTheme] = useState("vs-dark");
  const [language, setLanguage] = useState("javascript");

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  function handleEditorChange(value, event) {
    console.log("handleEditorChange", value, event);
  }

  function handleEditorDidMount(editor, monaco) {
    console.log("onMount: the editor instance:", editor);
    console.log("onMount: the monaco instance:", monaco);
  }

  function handleEditorWillMount(monaco) {
    console.log("beforeMount: the monaco instance:", monaco);
  }

  function handleEditorValidation(markers) {
    markers.forEach((marker) => console.log("onValidate:", marker.message));
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "5px",
        }}
      >
        <select value={theme} onChange={handleThemeChange}>
          <option value="vs-dark">Dark</option>
          <option value="vs">Light</option>
        </select>
        <select value={language} onChange={handleLanguageChange}>
          <option value="javascript">JavaScript</option>
          <option value="json">JSON</option>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
          <option value="typescript">TypeScript</option>
        </select>
      </Box>
      <Editor
        height="90vh"
        defaultLanguage={language}
        theme={theme}
        defaultValue="// Add your brilliant code here!"
        onChange={handleEditorChange}
        onMount={handleEditorDidMount}
        beforeMount={handleEditorWillMount}
        onValidate={handleEditorValidation}
      />
    </>
  );
};

export default MonacoEditor;

import Editor from "@monaco-editor/react";
import { Box } from "@mui/material";
import { useState } from "react";

const themes = [
  {
    label: "Dark",
    value: "vs-dark",
  },
  {
    label: "Light",
    value: "vs",
  },
  {
    label: "High Contrast",
    value: "hc-black",
  },
  [],
];

const languages = [
  {
    label: "JavaScript",
    value: "javascript",
    defaultCode: "// Add your brilliant code here!",
  },
  {
    label: "TypeScript",
    value: "typescript",
    defaultCode: "// Add your brilliant code here!",
  },
  {
    label: "Python",
    value: "python",
    defaultCode: "# Add your brilliant code here!",
  },
  {
    label: "Java",
    value: "java",
    defaultCode: "// Add your brilliant code here!",
  },
  {
    label: "C#",
    value: "csharp",
    defaultCode: "// Add your brilliant code here!",
  },
  {
    label: "C++",
    value: "cpp",
    defaultCode: "// Add your brilliant code here!",
  },
  {
    label: "HTML",
    value: "html",
    defaultCode: "<!-- Add your brilliant code here! -->",
  },
  { label: "C", value: "c", defaultCode: "// Add your brilliant code here!" },
  {
    label: "Ruby",
    value: "ruby",
    defaultCode: "# Add your brilliant code here!",
  },
  {
    label: "Swift",
    value: "swift",
    defaultCode: "// Add your brilliant code here!",
  },
  {
    label: "Golang",
    value: "golang",
    defaultCode: "// Add your brilliant code here!",
  },
  {
    label: "Scala",
    value: "scala",
    defaultCode: "// Add your brilliant code here!",
  },
  {
    label: "Kotlin",
    value: "kotlin",
    defaultCode: "// Add your brilliant code here!",
  },
  {
    label: "Rust",
    value: "rust",
    defaultCode: "// Add your brilliant code here!",
  },
  {
    label: "PHP",
    value: "php",
    defaultCode: "// Add your brilliant code here!",
  },
];

const MonacoEditor = () => {
  const [theme, setTheme] = useState("vs-dark");
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState(languages[0].defaultCode);

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
    setCode(
      languages.find((lang) => lang.value === event.target.value).defaultCode
    );
  };

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
          {themes.map((theme) => (
            <option key={theme.value} value={theme.value}>
              {theme.label}
            </option>
          ))}
        </select>
        <select value={language} onChange={handleLanguageChange}>
          {languages.map((lang) => (
            <option key={lang.value} value={lang.value}>
              {lang.label}
            </option>
          ))}
        </select>
      </Box>
      <Editor height="90vh" language={language} theme={theme} value={code} />
    </>
  );
};

export default MonacoEditor;

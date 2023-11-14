import "./App.css";
import AppContent from "./components/AppContent";
import ThemeProvider from "./theme";
import { BoardContextProvider } from "./contexts/BoardContext";

function App() {
  return (
    <ThemeProvider>
      <BoardContextProvider>
        <AppContent />
      </BoardContextProvider>
    </ThemeProvider>
  );
}

export default App;

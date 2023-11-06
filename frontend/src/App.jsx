import { useState } from 'react'
import './App.css'
import LandingPage from './pages/landingPage.jsx'
import AppContent from "./components/AppContent";
import ThemeProvider from "./theme";

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;

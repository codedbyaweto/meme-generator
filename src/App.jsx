import React from "react";
import Header from "./components/header";
import MainContent from "./components/maincontent";

export default function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }

  React.useEffect(() => {
    darkMode
      ? document.body.classList.add("dark-mode")
      : document.body.classList.remove("dark-mode");
  }, [darkMode]);

  return (
    <>
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <MainContent darkMode={darkMode} />
    </>
  );
}

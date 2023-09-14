import {useState} from "react";
import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true)

  function handleClick(){
    setIsDarkMode(!isDarkMode)
  }

  const appTheme = isDarkMode ? "App" : "App light"
  return (
    <div className={appTheme}>
      <Header
        isDarkMode={isDarkMode}
        handleClick={handleClick} />
      <ProjectForm />
      <ProjectList />
    </div>
  );
};

export default App;

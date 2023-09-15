
import { useState } from "react";
import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

const App = () => {

  const [projects, setProjects] = useState([])
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState("")

  const fetchProjects = () => {
    fetch("http://localhost:4000/projects")
    .then(response => response.json())
    .then(projects => setProjects(projects))
    .catch(error => console.error(`message: ${error.message}`))
  }

  const toggleDarkMode = () => {
    setIsDarkMode(isDarkMode => !isDarkMode)
  }

  const handleToggleDarkMode = (e) => {
    toggleDarkMode();
  }


  const searchResults = projects.filter(project => {
    return project.name.toLowerCase().includes(searchQuery.toLowerCase())
  })


  const appTheme = isDarkMode ? "App" : "App light"
  return (
    <div className={appTheme}>
      <Header
        isDarkMode={isDarkMode}
        handleToggleDarkMode={handleToggleDarkMode} />
      <ProjectForm />
      <button onClick={fetchProjects}>Load Projects</button>
      <ProjectList
      searchResults={searchResults}
      setSearchQuery={setSearchQuery}
     />
    </div>
  );
};

export default App;

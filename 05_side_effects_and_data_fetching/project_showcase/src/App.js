import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import Timer from "./components/Timer";

const App = () => {
  const [projects, setProjects] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isTimerVisible, setIsTimerVisible] = useState(false)


useEffect(() => {
  fetch("http://localhost:4000/projects")
  .then((res) => res.json())
  .then((projects) => setProjects(projects))
  .catch((error) => {
    console.error(`Message: ${error.message}`)
  })
}, [])


  const onToggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const handleClick = () => setIsTimerVisible(!isTimerVisible)

  return (
    <div className={isDarkMode ? "App" : "App light"}>
     <button onClick={handleClick}>Toggle Timer</button>
      {isTimerVisible? <Timer />: null}
      <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
      <ProjectForm />

      <ProjectList projects={projects} />
    </div>
  );
};

export default App;

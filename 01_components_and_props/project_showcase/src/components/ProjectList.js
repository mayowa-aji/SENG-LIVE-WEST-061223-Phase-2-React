import React from 'react';
import ProjectListItem from './ProjectListItem';

function ProjectList({ projects }) {
  const projectListItems = projects.map((project) => {
    // Pass project data to ProjectListItem
    return <ProjectListItem key={project.id} project={project} />;
  });

  return (
    <>
      <h1>ProjectList Component</h1>
      <ul>{projectListItems}</ul>
    </>
  );
}

export default ProjectList;

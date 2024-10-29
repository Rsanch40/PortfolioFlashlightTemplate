
import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {[...Array(6)].map((_, i) => (
          <div className="project-card" key={i}>
            <div className="image-placeholder"></div>
            <h3>Project {i + 1}</h3>
            <p>Short description of the project.</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

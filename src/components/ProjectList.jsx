[13:29, 13/05/2026] Deski💝: import React, { useState } from 'react';

function ProjectForm({ onAddProject }) {
  const [formData, setFormData] = useState({ title: '', description: '', image: '', link: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Default tech image if user leaves it blank
    const techPlaceholder = "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=80";
    
    const finalData = {
      ...formData,
      image: formData.image.trim() === "" ? techPlaceholder : formData.image
    };

    onAddProject(finalData);
    setFormData({ title: '', description: '', image: '', link: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="project-form">
      <input type="text" name="title" placeholder="Project Title" value={formData.title} onChange={handleChange} required />
      <input type="text" name="description" placeholder="Tech Stack / Description" value={formData.description} onChange={handleChange} required />
      <input type="text" name="image" placeholder="Image URL (or leave blank for Tech Image)" value={formData.image} onChange={handleChange} />
      <button type="submit">Publish Project</button>
    </form>
  );
}

export default ProjectForm;
[13:30, 13/05/2026] Deski💝: import React from 'react';
import ProjectCard from './ProjectCard';

function ProjectList({ projects }) {
  if (projects.length === 0) {
    return <p className="no-results">No projects found. Try a different search or add a new one!</p>;
  }

  return (
    <div className="project-list">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

export default ProjectList;
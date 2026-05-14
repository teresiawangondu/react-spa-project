import { useState } from "react";

function ProjectForm({ onRegister }) {
  const [formData, setFormData] = useState({ title: "", description: "" });
  const [validationMessage, setValidationMessage] = useState("");

  function updateField(field, value) {
    setFormData({ ...formData, [field]: value });
  }

  function handleAdd(event) {
    event.preventDefault();

    if (!formData.title.trim()) {
      setValidationMessage("Project title is required.");
      return;
    }

    onRegister({
      id: Date.now(),
      title: formData.title,
      description: formData.description,
    });

    setFormData({ title: "", description: "" });
    setValidationMessage("");
  }

  return (
    <div>
      <h2>Add Project</h2>
      <form onSubmit={handleAdd}>
        <div>
          <label>Title</label>
          <input
            placeholder="e.g. Portfolio Website"
            value={formData.title}
            onChange={(e) => updateField("title", e.target.value)}
          />
          {validationMessage && <p>{validationMessage}</p>}
        </div>
        <div>
          <label>Description</label>
          <textarea
            placeholder="A short description of the project..."
            value={formData.description}
            onChange={(e) => updateField("description", e.target.value)}
          />
        </div>
        <button type="submit">+ Add Project</button>
      </form>
    </div>
  );
}

export default ProjectForm;
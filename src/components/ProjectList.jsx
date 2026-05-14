import { useState } from "react";

function ProjectList({ items }) {
  const [query, setQuery] = useState("");

  const visibleItems = items.filter(
    (entry) =>
      entry.title.toLowerCase().includes(query.toLowerCase()) ||
      entry.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search projects..."
      />

      {items.length === 0 ? (
        <p>No projects has been added. Please add one above to get started!</p>
      ) : visibleItems.length === 0 ? (
        <p>No projects match your search.</p>
      ) : (
        <ul>
          {visibleItems.map((entry) => (
            <li key={entry.id}>
              <strong>{entry.title}</strong>
              {entry.description && <p>{entry.description}</p>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProjectList;
// ResourceList.js
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceCard from '../components/ResourceCard';

// Simulated resources (this would usually come from an API)
const resources = [
  { id: 1, title: 'Resource 1', description: 'Description of Resource 1' },
  { id: 2, title: 'Resource 2', description: 'Description of Resource 2' },
  { id: 3, title: 'Resource 3', description: 'Description of Resource 3' },
];

function ResourceList() {
  const isLoggedIn = false; // This is where you check if the user is logged in (use state or context)

  return (
    <div>
      <h1>Browse Resources</h1>
      <div className="resource-list">
        {resources.map((resource) => (
          <div key={resource.id} className="resource-card">
            <h3>{resource.title}</h3>
            <p>{resource.description}</p>
            {isLoggedIn ? (
              <Link to={`/borrow/${resource.id}`} className="borrow-button">
                Borrow
              </Link>
            ) : (
              <Link to="/login" className="borrow-button">
                Borrow (Login Required)
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResourceList;

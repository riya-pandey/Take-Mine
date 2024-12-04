// ResourceCard.js
import React from 'react';
import { Link } from 'react-router-dom';

function ResourceCard({ resource, isLoggedIn }) {
  return (
    <div className="resource-card">
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
  );
}

export default ResourceCard;

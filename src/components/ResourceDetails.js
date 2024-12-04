// AvailableResources.js
import React from 'react';
import './ResourceDetails.css';

const AvailableResources = () => {
  const resources = [
    { id: 1, name: "Physics Textbook", category: "Books", availability: "In Stock" },
    { id: 2, name: "Chemistry Lab Equipment", category: "Equipment", availability: "Limited" },
    { id: 3, name: "Math Tutoring Session", category: "Tutoring", availability: "Available" },
    { id: 4, name: "Programming Notes", category: "Notes", availability: "In Stock" },
    { id: 5, name: "Biology Microscope", category: "Equipment", availability: "Limited" },
    { id: 6, name: "Statistics Guide", category: "Books", availability: "Available" }
  ];

  return (
    <div className="resources-page">
      <div className="resources-header">
        <h1>Available Resources</h1>
        <div className="resources-legend">
          <span className="legend-item instock">In Stock</span>
          <span className="legend-item limited">Limited</span>
          <span className="legend-item available">Available</span>
        </div>
      </div>
      <div className="resources-list">
        {resources.map(resource => (
          <div key={resource.id} className={`resource-item ${resource.availability.replace(/\s/g, '').toLowerCase()}`}>
            <h2>{resource.name}</h2>
            <p>Category: {resource.category}</p>
            <p className="status">Status: {resource.availability}</p>
            <button className="borrow-btn">Borrow Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableResources;
import React, { useState } from 'react';
import './Search.css';

const SearchPage = () => {
  const resources = [
    { id: 1, name: 'Physics Textbook', category: 'Books', description: 'Comprehensive guide to Physics' },
    { id: 2, name: 'Camera', category: 'Equipment', description: 'Canon DSLR Camera with lenses' },
    { id: 3, name: 'DBMS Notes', category: 'Notes', description: 'Database Management System notes for students' },
    { id: 4, name: 'Programming Notes', category: 'Books', description: 'Notes for learning programming languages' },
    { id: 5, name: 'Calculator', category: 'Equipment', description: 'Scientific Calculator' },
    { id: 6, name: 'E-bicycle', category: 'Equipment', description: 'Electric bicycle for commuting' }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredResources, setFilteredResources] = useState(resources);

  // Handle search input change
  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    // Filter resources based on search term (case-insensitive)
    const filtered = resources.filter((resource) =>
      resource.name.toLowerCase().includes(term.toLowerCase()) ||
      resource.category.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredResources(filtered);
  };

  return (
    <div className="search-page">
      <h1>Search Resources</h1>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by resource name or category..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <div className="resources-list">
        {filteredResources.length > 0 ? (
          filteredResources.map((resource) => (
            <div key={resource.id} className="resource-item">
              <h3>{resource.name}</h3>
              <p>Category: {resource.category}</p>
              <p>{resource.description}</p>
              <button>Borrow Now</button>
            </div>
          ))
        ) : (
          <p>No resources found for your search.</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;

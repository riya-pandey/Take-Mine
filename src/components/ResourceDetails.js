import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import "./ResourceDetails.css";

const AvailableResources = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [resources, setResources] = useState([
    { id: 1, name: "Physics Textbook", category: "Books", availability: "In Stock", image: "2.png", owner: "user1" },
    { id: 2, name: "Camera", category: "Equipment", availability: "Limited", image: "/images/2.jpg", owner: "user2" },
    { id: 3, name: "DBMS Note", category: "Tutoring", availability: "Available", owner: "user1" },
  ]);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [currentUser, setCurrentUser] = useState("user1"); // Replace with actual logged-in user
  const [newResource, setNewResource] = useState({ name: "", category: "", availability: "", image: null });

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn");
    if (!loginStatus) {
      navigate("/login");
    } else {
      setIsLoggedIn(true);
    }
  }, [navigate]);

  // Handle filter click
  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
  };

  // Filter resources based on the selected filter
  const filteredResources =
    selectedFilter === "All"
      ? resources
      : resources.filter((resource) => resource.availability === selectedFilter);

  // Handle borrow resource
  const handleBorrow = (id) => {
    alert(`Resource ${id} borrowed successfully!`);
  };

  // Handle adding a new resource
  const handleAddResource = (e) => {
    e.preventDefault();
    const id = resources.length + 1;
    const newRes = { ...newResource, id, owner: currentUser };
    setResources([...resources, newRes]);
    setNewResource({ name: "", category: "", availability: "", image: null });
    alert("Resource uploaded successfully!");
  };

  // Handle editing a resource
  const handleEdit = (id) => {
    const resource = resources.find((res) => res.id === id);
    const updatedName = prompt("Update Resource Name", resource.name);
    const updatedResources = resources.map((res) =>
      res.id === id ? { ...res, name: updatedName } : res
    );
    setResources(updatedResources);
  };

  // Handle deleting a resource
  const handleDelete = (id) => {
    setResources(resources.filter((res) => res.id !== id));
    alert("Resource deleted successfully!");
  };

  return (
    <div className="resources-page">
      <div className="resources-header">
        <h1>Available Resources</h1>
        <div className="resources-legend">
          <button
            className={`legend-item instock ${selectedFilter === "In Stock" ? "active" : ""}`}
            onClick={() => handleFilterClick("In Stock")}
          >
            In Stock
          </button>
          <button
            className={`legend-item limited ${selectedFilter === "Limited" ? "active" : ""}`}
            onClick={() => handleFilterClick("Limited")}
          >
            Limited
          </button>
          <button
            className={`legend-item available ${selectedFilter === "Available" ? "active" : ""}`}
            onClick={() => handleFilterClick("Available")}
          >
            Available
          </button>
          <button
            className={`legend-item all ${selectedFilter === "All" ? "active" : ""}`}
            onClick={() => handleFilterClick("All")}
          >
            Show All
          </button>
        </div>
      </div>

      <div className="resources-list">
        {filteredResources.map((resource) => (
          <div key={resource.id} className={`resource-item ${resource.availability.replace(/\s/g, "").toLowerCase()}`}>
            <TransformWrapper
              initialScale={1}
              minScale={0.5}
              maxScale={4}
              limitToBounds={true}
              centerOnInit={true}
            >
              {({ zoomIn, zoomOut, resetTransform }) => (
                <>
                  <div className="zoom-controls">
                    <button onClick={() => zoomIn()}>+</button>
                    <button onClick={() => zoomOut()}>-</button>
                    <button onClick={() => resetTransform()}>Reset</button>
                  </div>
                  <TransformComponent>
                    <img
                      src={resource.image}
                      alt={resource.name}
                      className="resource-image"
                    />
                  </TransformComponent>
                </>
              )}
            </TransformWrapper>
            <h2>{resource.name}</h2>
            <p>Category: {resource.category}</p>
            <p className="status">Status: {resource.availability}</p>
            {resource.owner !== currentUser && (
              <button className="borrow-btn" onClick={() => handleBorrow(resource.id)}>
                Borrow Now
              </button>
            )}
            {resource.owner === currentUser && (
              <div className="resource-actions">
                <button className="update-btn" onClick={() => handleEdit(resource.id)}>
                  Edit
                </button>
                <button className="delete-btn" onClick={() => handleDelete(resource.id)}>
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="add-resource">
        <h2>Upload New Resource</h2>
        <form onSubmit={handleAddResource}>
          <input
            type="text"
            placeholder="Resource Name"
            value={newResource.name}
            onChange={(e) => setNewResource({ ...newResource, name: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Category"
            value={newResource.category}
            onChange={(e) => setNewResource({ ...newResource, category: e.target.value })}
            required
          />
          <select
            value={newResource.availability}
            onChange={(e) => setNewResource({ ...newResource, availability: e.target.value })}
            required
          >
            <option value="">Select Availability</option>
            <option value="In Stock">In Stock</option>
            <option value="Limited">Limited</option>
            <option value="Available">Available</option>
          </select>
          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setNewResource({ ...newResource, image: URL.createObjectURL(e.target.files[0]) })
            }
            required
          />
          <button type="submit" className="upload-btn">
            Upload Resource
          </button>
        </form>
      </div>
    </div>
  );
};

export default AvailableResources;

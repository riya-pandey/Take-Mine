// UserProfile.js
import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/Authcontext';
import './UserProfile.css';

const UserProfile = () => {
  const { user } = useAuth();
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    avatar: '',
    department: '',
    studentId: ''
  });
  const [borrowedItems, setBorrowedItems] = useState([]);
  const [addedItems, setAddedItems] = useState([]);
  const [activeTab, setActiveTab] = useState('profile');

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    // Handle profile update logic
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    // Handle image upload logic
  };

  return (
    <div className="profile-container">
      <div className="profile-sidebar">
        <div className="profile-avatar">
          <img src={profileData.avatar || '/default-avatar.png'} alt="Profile" />
          <label className="avatar-upload">
            <input type="file" onChange={handleImageUpload} accept="image/*" />
            <span>Update Photo</span>
          </label>
        </div>
        <nav className="profile-nav">
          <button 
            className={activeTab === 'profile' ? 'active' : ''} 
            onClick={() => setActiveTab('profile')}
          >
            Profile Details
          </button>
          <button 
            className={activeTab === 'borrowed' ? 'active' : ''} 
            onClick={() => setActiveTab('borrowed')}
          >
            Borrowed Items
          </button>
          <button 
            className={activeTab === 'added' ? 'active' : ''} 
            onClick={() => setActiveTab('added')}
          >
            My Added Items
          </button>
        </nav>
      </div>

      <div className="profile-content">
        {activeTab === 'profile' && (
          <div className="profile-details">
            <h2>Profile Information</h2>
            <form onSubmit={handleProfileUpdate}>
              <div className="form-group">
                <label>Full Name</label>
                <input 
                  type="text" 
                  value={profileData.name}
                  onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input 
                  type="email" 
                  value={profileData.email}
                  onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label>Semester</label>
                <input 
                  type="text" 
                  value={profileData.department}
                  onChange={(e) => setProfileData({...profileData, department: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label>Student ID</label>
                <input 
                  type="text" 
                  value={profileData.studentId}
                  onChange={(e) => setProfileData({...profileData, studentId: e.target.value})}
                />
              </div>
              <button type="submit" className="update-btn">Update Profile</button>
            </form>
          </div>
        )}

        {activeTab === 'borrowed' && (
          <div className="borrowed-items">
            <h2>Borrowed Items</h2>
            <div className="items-grid">
              {borrowedItems.map(item => (
                <div key={item.id} className="item-card">
                  <img src={item.image} alt={item.name} />
                  <h3>{item.name}</h3>
                  <p>Borrowed: {item.borrowDate}</p>
                  <p>Return by: {item.returnDate}</p>
                  <button className="return-btn">Return Item</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'added' && (
          <div className="added-items">
            <h2>My Added Items</h2>
            <div className="items-grid">
              {addedItems.map(item => (
                <div key={item.id} className="item-card">
                  <img src={item.image} alt={item.name} />
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <div className="item-actions">
                    <button className="edit-btn">Edit</button>
                    <button className="delete-btn">Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
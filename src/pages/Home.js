// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
  
      <section 
        className="hero-section" 
        style={{ backgroundImage: 'url(/home3.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }}
      >
        <div className="hero-overlay">
          <h1>Connecting Students with Resources and Knowledge</h1>
          <p>Access, Share, and Borrow University Resources. Find Tutors, Expand Your Knowledge.</p>
          <Link to="/search-items" className="cta-button">Start Searching</Link>
        </div>
      </section>

      {/* Available Resources Section */}
      <section className="available-resources">
        <h2>Available Resources</h2>
        <div className="resource-cards">
          <div className="resource-card">
            <img src="/1.png" alt="Resource 1" />
            <h3>Resource 1</h3>
            <p>Description of the resource.</p>
            <Link to="/resource/1" className="view-btn">View Details</Link>
          </div>
          <div className="resource-card">
            <img src="/2.png" alt="Resource 2" />
            <h3>Resource 2</h3>
            <p>Description of the resource.</p>
            <Link to="/resource/2" className="view-btn">View Details</Link>
          </div>
          <div className="resource-card">
            <img src="/3.png" alt="Resource 3" />
            <h3>Resource 3</h3>
            <p>Description of the resource.</p>
            <Link to="/resource/3" className="view-btn">View Details</Link>
          </div>
          <div className="resource-card">
            <img src="/4.png" alt="Resource 4" />
            <h3>Resource 4</h3>
            <p>Description of the resource.</p>
            <Link to="/resource/4" className="view-btn">View Details</Link>
          </div>
          {/* Add more resource cards as needed */}
        </div>
      </section>


      {/* Tutors Section */}
      <section className="tutors-for-you">
        <h2>Find Tutors</h2>
        <div className="tutor-cards">
          <div className="tutor-card">
            <img src="/assets/tutor1.jpg" alt="Tutor 1" />
            <h3>Tutor Name</h3>
            <p>Subject</p>
            <Link to="/tutor/1" className="view-btn">View Profile</Link>
          </div>
          {/* Add more tutor cards as needed */}
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-us">
        <h2>About Us</h2>
        <p>We are a platform dedicated to connecting students by sharing resources, finding tutors, and building a community.</p>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>"This platform helped me find the perfect tutor for my courses!"</p>
            <h4>- John Doe, Student</h4>
          </div>
          {/* Add more testimonial cards as needed */}
        </div>
      </section>
    </div>
  );
};

export default Home;

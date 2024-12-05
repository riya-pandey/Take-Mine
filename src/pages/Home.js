import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="hero-content"
        >
          <h1>Share Resources.<br/>Find Tutors.<br/>Succeed Together.</h1>
          <p>Your university's collaborative platform for sharing resources and connecting with peer tutors.</p>
          <div className="hero-buttons">
            <Link to="/login" className="primary-btn">Browse Resources</Link>
            <Link to="/login" className="secondary-btn">Find Tutors</Link>
          </div>
        </motion.div>
      </section>

      <section className="featured-resources">
        <h2>Featured Resources</h2>
        <div className="resources-grid">
          {featuredResources.map((resource, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className="resource-card"
            >
              <div className="resource-image">
                <img src={resource.image} alt={resource.title} />
                <div className="resource-status">{resource.status}</div>
              </div>
              <div className="resource-info">
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
                <Link to={`/resource/${resource.id}`} className="view-details">
                  View Details →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps-container">
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            className="step"
          >
            <div className="step-number">1</div>
            <h3>Sign Up</h3>
            <p>Create your account using your university email</p>
          </motion.div>
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            className="step"
          >
            <div className="step-number">2</div>
            <h3>Browse</h3>
            <p>Find resources or tutors you need</p>
          </motion.div>
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            className="step"
          >
            <div className="step-number">3</div>
            <h3>Connect</h3>
            <p>Borrow items or schedule tutoring sessions</p>
          </motion.div>
        </div>
      </section>

      <section className="stats">
        <div className="stat-item">
          <h3>1000+</h3>
          <p>Active Users</p>
        </div>
        <div className="stat-item">
          <h3>500+</h3>
          <p>Available Resources</p>
        </div>
        <div className="stat-item">
          <h3>200+</h3>
          <p>Expert Tutors</p>
        </div>
      </section>

      <section className="cta">
        <motion.div 
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          className="cta-content"
        >
          <h2>Ready to Get Started?</h2>
          <p>Join our community of students helping students</p>
          <Link to="/signup" className="cta-button">Sign Up Now</Link>
        </motion.div>
      </section>
    </div>
  );
};

const featuredResources = [
  {
    id: 1,
    title: "Physics Textbook",
    description: "Latest edition, perfect for PHY101",
    status: "Available",
    image: "/1.png"
  },
  {
    id: 2,
    title: "Graphing Calculator",
    description: "TI-84 Plus, great for calculus",
    status: "Available",
    image: "/2.png"
  },
  {
    id: 3,
    title: "Lab Equipment",
    description: "Chemistry lab kit",
    status: "Limited",
    image: "/3.png"
  },
  {
    id: 4,
    title: "Study Notes",
    description: "Comprehensive CS notes",
    status: "Available",
    image: "/4.png"
  }
];

export default Home;
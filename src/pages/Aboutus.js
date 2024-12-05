import React from 'react';
import './Aboutus.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function AboutUs() {
  return (
    <div className="about-container">
      <section className="hero">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="hero-content"
        >
          <h1>Empowering Student Success Through Sharing</h1>
          <p>TakeMine connects students to share resources and knowledge, making education more accessible for everyone.</p>
        </motion.div>
      </section>

      <section className="mission-vision">
        <div className="container">
          <motion.div 
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            className="mission-card"
          >
         <div class="mission-section">
  <h2>Our Mission</h2>
  <p>
    Welcome to <strong>TakeMine!</strong><br/>
    At TakeMine, we are dedicated to helping students achieve more by 
    providing access to essential resources. Whether it’s textbooks, 
    equipment, or academic materials, we make borrowing and sharing seamless, 
    fostering a community of collaboration and support. We believe that no student should 
    be held back due to the lack of access to resources. <strong>TakeMine</strong> is here to bridge that gap, 
    making learning more accessible and collaborative for everyone.
  </p>
</div>

 

          </motion.div>
        </div>
      </section>

      <section className="features">
        <h2>What We Offer</h2>
        <div className="features-grid">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="feature-card"
          >
            <div className="icon">📚</div>
            <h3>Resource Sharing</h3>
            <p>Borrow textbooks, lab equipment, and study materials from fellow students</p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="feature-card"
          >
            <div className="icon">👥</div>
            <h3>Peer Tutoring</h3>
            <p>Connect with experienced student tutors for personalized learning support</p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="feature-card"
          >
            <div className="icon">🤝</div>
            <h3>Community</h3>
            <p>Join a thriving community of students helping students</p>
          </motion.div>
        </div>
      </section>

      <section className="impact">
        <div className="impact-stats">
          <div className="stat">
            <h3>1000+</h3>
            <p>Active Users</p>
          </div>
          <div className="stat">
            <h3>500+</h3>
            <p>Resources Shared</p>
          </div>
          <div className="stat">
            <h3>200+</h3>
            <p>Verified Tutors</p>
          </div>
        </div>
      </section>

      <section className="join-us">
        <motion.div 
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          className="join-content"
        >
        <div class="why-choose-takemine">
  <h2>Why Choose TakeMine?</h2>
  
    <li><strong>Accessibility:</strong> Bridging the gap between students and resources.</li>
    <li><strong>Community:</strong> Building connections through sharing and collaboration.</li>
    <li><strong>Simplicity:</strong> Intuitive features to borrow, share, and manage effortlessly.</li>

</div>

          <Link to="/login" className="cta-button">
  Get Started
</Link>
        </motion.div>
      </section>
    </div>
  );
}

export default AboutUs;
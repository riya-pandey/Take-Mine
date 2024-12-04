import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getResourceById, leaveReview } from '../utils/api'; 
import ReviewForm from '../components/ReviewForm'; 
import './ResourcePage.css';
import { FaStar, FaMapMarkerAlt, FaDollarSign, FaArrowRight } from 'react-icons/fa';
function ResourcePage() {
  const { id } = useParams();
  const [resource, setResource] = useState(null);
  const [reviews, setReviews] = useState([]);

  // Fetch resource details and reviews on page load
  useEffect(() => {
    const fetchResource = async () => {
      try {
        const data = await getResourceById(id);
        setResource(data);
        setReviews(data.reviews || []);
      } catch (error) {
        console.error('Error fetching resource:', error);
      }
    };
    fetchResource();
  }, [id]);

  const handleReview = async (rating, comment) => {
    try {
      const newReview = await leaveReview(id, rating, comment);
      setReviews((prevReviews) => [...prevReviews, newReview]);
    } catch (error) {
      console.error('Error leaving review:', error);
    }
  };

  if (!resource) return <div>Loading...</div>;

  return (
    <div className="resource-page-container">
      <div className="resource-header">
        <div className="resource-main-info">
          <h1 className="resource-title">{resource.name}</h1>
          <span className={`availability-badge ${resource.availability ? 'available' : 'unavailable'}`}>
            {resource.availability ? 'Available' : 'Unavailable'}
          </span>
        </div>
        
        <p className="resource-description">{resource.description}</p>
        
        <div className="resource-details-grid">
          <div className="detail-item">
            <FaMapMarkerAlt className="detail-icon" />
            <span>{resource.location}</span>
          </div>
          {/* <div className="detail-item">
            <FaDollarSign className="detail-icon" />
            <span>{resource.cost}</span>
          </div> */}
        </div>

        <Link to="/availableresource" className="view-more-resources">
          View More Resources
          <FaArrowRight className="arrow-icon" />
        </Link>
      </div>

      <div className="reviews-section">
        <h2 className="section-title">Reviews</h2>
        <div className="review-cards">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                <div className="review-avatar">
                  {review.user.charAt(0).toUpperCase()}
                </div>
                <div className="review-info">
                  <h3 className="review-user">{review.user}</h3>
                  <div className="star-rating">
                    {[...Array(5)].map((_, index) => (
                      <FaStar
                        key={index}
                        className={index < review.rating ? 'star filled' : 'star empty'}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="review-comment">{review.comment}</p>
            </div>
          ))}
        </div>

        <div className="leave-review-form">
          <h3>Share Your Experience</h3>
          <ReviewForm onSubmit={handleReview} />
        </div>
      </div>
    </div>
  );
}

export default ResourcePage;
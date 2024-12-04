// SignUp.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Form, Button, Container, Card, Row, Col, Alert } from 'react-bootstrap';
import { FaUser, FaEnvelope, FaIdCard, FaPhone, FaBuilding, FaBookOpen, FaLock } from 'react-icons/fa';
import './signup.css';

function SignUp() {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    studentId: '',
    password: '',
    confirmPassword: '',
    department: '',
    semester: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post('http://localhost:90/student/register', formData);
      if (response.data) {
        navigate('/login');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-page">
      <Container>
       
        
        <Card className="signup-card">
          <Card.Body className="p-md-5">
            <div className="text-center mb-4">
              <h2 className="signup-title">Student Registration</h2>
              <p className="text-muted">Create your account to get started</p>
            </div>

            {error && <Alert variant="danger" className="animated fadeIn">{error}</Alert>}

            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6} className="mb-3">
                  <div className="input-group-custom">
                    <div className="input-icon">
                      <FaUser />
                    </div>
                    <Form.Control
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName} 
                    //  value=  this.state.firstName
                      onChange={handleChange}
                      //Data from backend
                      // onChange={(e) => this.setState({ fullname: e.target.value })}
                      required
                    />
                  </div>
                </Col>
                <Col md={6} className="mb-3">
                  <div className="input-group-custom">
                    <div className="input-icon">
                      <FaUser />
                    </div>
                    <Form.Control
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </Col>

                <Col md={6} className="mb-3">
                  <div className="input-group-custom">
                    <div className="input-icon">
                      <FaEnvelope />
                    </div>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </Col>
                <Col md={6} className="mb-3">
                  <div className="input-group-custom">
                    <div className="input-icon">
                      <FaIdCard />
                    </div>
                    <Form.Control
                      type="text"
                      name="studentId"
                      placeholder="Student ID"
                      value={formData.studentId}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </Col>

                <Col md={6} className="mb-3">
                  <div className="input-group-custom">
                    <div className="input-icon">
                      <FaPhone />
                    </div>
                    <Form.Control
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </Col>
                <Col md={6} className="mb-3">
                  <div className="input-group-custom">
                    <div className="input-icon">
                      <FaBuilding />
                    </div>
                    <Form.Select
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Department</option>
                      <option value="cs">Computer Science</option>
                      <option value="ee">Electrical Engineering</option>
                      <option value="me">Mechanical Engineering</option>
                      <option value="ce">Civil Engineering</option>
                    </Form.Select>
                  </div>
                </Col>

                <Col md={6} className="mb-3">
                  <div className="input-group-custom">
                    <div className="input-icon">
                      <FaBookOpen />
                    </div>
                    <Form.Select
                      name="semester"
                      value={formData.semester}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Semester</option>
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(sem => (
                        <option key={sem} value={sem}>Semester {sem}</option>
                      ))}
                    </Form.Select>
                  </div>
                </Col>
                <Col md={6} className="mb-3">
                  <div className="input-group-custom">
                    <div className="input-icon">
                      <FaLock />
                    </div>
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </Col>

                <Col md={6} className="mb-4">
                  <div className="input-group-custom">
                    <div className="input-icon">
                      <FaLock />
                    </div>
                    <Form.Control
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </Col>
              </Row>

              <div className="terms-check">
                <Form.Check
                  type="checkbox"
                  label="I agree to the Terms and Conditions"
                  required
                  className="custom-checkbox"
                />
              </div>

              <Button
                type="submit"
                className="submit-button"
                disabled={loading}>
                {loading ? 'Creating Account...' : 'Create Account'}
              </Button>

              <div className="text-center mt-4">
                <p className="login-text">
                  Already have an account?{' '}
                  <a href="/login" className="login-link">Sign in</a>
                </p>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default SignUp;
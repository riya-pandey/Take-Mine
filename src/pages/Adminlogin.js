import React, { Component } from "react";
import axios from "axios";
import { Form, Button, Container, Card } from "react-bootstrap";
import { FaUser, FaLock } from 'react-icons/fa';
import './AdminLogin.css';

class LoginAdmin extends Component {
  state = {
    username: "",
    password: "",
    checklogin: false,
    isLoading: false
  };

  usernameChangeHandler = (event) => {
    this.setState({ username: event.target.value });
  };

  passwordChangeHandler = (event) => {
    this.setState({ password: event.target.value });
  };

  submitLogin = (e) => {
    e.preventDefault();
    this.setState({ isLoading: true });
    
    axios
      .post("http://localhost:90/admin/login", this.state)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("usertype", "Admin");
        window.location.href = "/";
      })
      .catch((err) => {
        alert("Invalid username or password. Please try again.");
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };



  render() {
    return (
      <div className="page-wrapper">
        <Container className="d-flex justify-content-center align-items-center min-vh-100">
          <div className="login-content">
            <div className="logo-section text-center mb-4">
              <img src="/take.png" alt="Logo" className="logo-img" />
            </div>
            
            <Card className="login-card">
              <Card.Body className="p-4">
                <div className="text-center mb-4">
                  <h2 className="login-title">Admin Login</h2>
                  <p className="text-muted">Welcome back! Please login to continue</p>
                </div>
                
                <Form onSubmit={this.submitLogin}>
                  <Form.Group className="mb-3">
                    <div className="input-group">
                      <span className="input-group-text">
                        <FaUser className="icon" />
                      </span>
                      <Form.Control
                        type="text"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={this.usernameChangeHandler}
                        required
                      />
                    </div>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <div className="input-group">
                      <span className="input-group-text">
                        <FaLock className="icon" />
                      </span>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.passwordChangeHandler}
                        required
                      />
                    </div>
                  </Form.Group>

                  <Button 
                    type="submit" 
                    className="login-button w-100"
                    disabled={this.state.isLoading}
                  >
                    {this.state.isLoading ? 'Signing in...' : 'Sign In'}
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </div>
    );
  }
}



export default LoginAdmin;
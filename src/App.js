import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginAdmin from "./pages/Adminlogin";
import ResourceList from "./pages/ResourceList";
import Login from "./pages/login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import AdminDashboard from "./pages/AdminPage";
import ResourcePage from "./pages/ResourcePage";
import BorrowPage from "./pages/BorrowPage";
import UserProfile from "./pages/UserProfile";
import About from "./pages/Aboutus";
import Available from "./components/ResourceDetails";
import User from "./pages/UserProfile";
import Search from "./pages/Search";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn");
    const role = localStorage.getItem("userRole");
    setIsLoggedIn(!!loginStatus);
    setUserRole(role || "");
  }, []);

  const handleLogin = (role) => {
    setIsLoggedIn(true);
    setUserRole(role);
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userRole", role);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole("");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userRole");
    window.location.href = "/";
  };

  return (
    <Router>
      {/* Render header and footer only for non-admin routes */}
      {!window.location.pathname.startsWith("/admin") && <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />}
      
      <div>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path ="/profile" element={<User/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/availableresources" element={isLoggedIn ? <ResourceList /> : <Navigate to="/login" />} />
          <Route path="/resource/:id" element={<ResourcePage />} />
          <Route path="/borrow/:id" element={isLoggedIn ? <BorrowPage /> : <Navigate to="/login" />} />
          <Route path="/profile" element={isLoggedIn ? <UserProfile /> : <Navigate to="/login" />} />
          <Route path="/availableresource" element={<Available />} />
          <Route path ="/search" element={<Search/>}/>
   
          {/* Authentication */}
          <Route path="/login" element={<Login onLogin={() => handleLogin("user")} />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Admin routes */}
          <Route path="/admin-login" element={<LoginAdmin onLogin={() => handleLogin("admin")} />} />
          <Route path="/admin-dashboard" element={userRole === "admin" ? <AdminDashboard /> : <Navigate to="/admin-login" />} />
        </Routes>
      </div>

      {!window.location.pathname.startsWith("/admin") && <Footer />}
    </Router>
  );
};

export default App;

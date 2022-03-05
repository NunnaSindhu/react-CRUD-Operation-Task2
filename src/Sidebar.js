import React from "react";
import {Link,NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    > 
      <Link
        className="sidebar-brand d-flex align-items-center justify-content-center"
        to="/"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">
         CRUD Operations
        </div>
      </Link>

      <hr className="sidebar-divider my-0" />

      <li className="nav-item active">
        <NavLink className="nav-link" to="/pages/DashBoard">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </NavLink>
      </li>

      <hr className="sidebar-divider" />

      <li className="nav-item">
        <NavLink
          className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
          to="/pages/ListUsers"         
        >
          <span>List Users</span>
        </NavLink>
      </li>
      <hr className="sidebar-divider" />

<li className="nav-item">
  <NavLink
     className={({ isActive }) =>
     isActive ? "nav-link active" : "nav-link"
   }
   to="/pages/CreateUser"
    
  >
    <span>Create User</span>
  </NavLink>
</li>
<hr className="sidebar-divider" />

<li className="nav-item">
  <NavLink
       className={({ isActive }) =>
       isActive ? "nav-link active" : "nav-link"
     }
    to="/pages/Profile"
   
  >
    <span>Edit User</span>
  </NavLink>
</li>
<hr className="sidebar-divider" />

<li className="nav-item">
  <NavLink
      className={({ isActive }) =>
      isActive ? "nav-link active" : "nav-link"
    }
    to="/pages/Profile"
    
  >
    <span>Profile</span>
  </NavLink>
</li>
    </ul>
  );
}

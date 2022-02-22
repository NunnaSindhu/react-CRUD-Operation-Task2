import React from "react";
import Sidebar from "./Sidebar";
import BodySection from './BodySection';
import "./AdminDashboard.css";
function AdminDashboard() {
  return (
    <div id="wrapper">    
      <Sidebar />
      <BodySection />
    </div>
  );
}

export default AdminDashboard;

import React from "react";
import DashboardComparative from "../components/DashboardComparative/DashboardComparative"
import Navbar from "../components/Navbar/Navbar";

export default function Dashboard() {
  return (
      <div className="dashboard">
    <Navbar/>
    <div className="dashboard-complement-container">
      <div className="dashboard-complement">
      <DashboardComparative/>
      </div>
      </div>
      </div>
  );
}

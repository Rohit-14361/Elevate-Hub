import React from "react";
import DashboardNav from "../../components/DashboardNav";
import SideBar from "../../components/SideBar";

function Dashboard({ children }) {
  return (
    <div>
      <DashboardNav />
      <div className="flex">
        <SideBar />

        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}

export default Dashboard;

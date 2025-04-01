import React from "react";
import './InvestorDashboard.css';

const InvestorDashboard = () => {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="logo">LET'S GROW</div>
        <nav>
          <ul>
            <li className="active">
              <i className="icon-user"></i> Profile
            </li>
            <li>
              <i className="icon-dashboard"></i> Dashboard
            </li>
            <li>
              <i className="icon-category"></i> Categories
            </li>
            <li>
              <i className="icon-settings"></i> Settings
            </li>
            <li>
              <i className="icon-logout"></i> Log Out
            </li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <header className="header">
          <button className="filter-btn">Other</button>
          <input type="text" className="search-bar" placeholder="Search" />
        </header>
        <section className="cards">
          <div className="card">
            <div className="profile">
              <img
                src="https://via.placeholder.com/40"
                alt="User"
                className="profile-pic"
              />
              <div>
                <h4>K.A.D.H. Rajapaksha</h4>
                <p>Mar 12, 2025</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="profile">
              <img
                src="https://via.placeholder.com/40"
                alt="User"
                className="profile-pic"
              />
              <div>
                <h4>H.M.S.A. Senarathne</h4>
                <p>Mar 10, 2025</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default InvestorDashboard;

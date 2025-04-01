import React from "react";
import './InvestorDashboard.css';

const InvestorDashboard = () => {
  return (
    <div className="Investor-dashboard-container">
      <aside className="Investor-sidebar">
        <div className="Investor-logo">LET'S GROW</div>
        <nav>
          <ul>
            <li className="Investor-active">
              <i className="Investor-icon-user"></i> Profile
            </li>
            <li>
              <i className="Investor-icon-dashboard"></i> Dashboard
            </li>
            <li>
              <i className="Investor-icon-category"></i> Categories
            </li>
            <li>
              <i className="Investor-icon-settings"></i> Settings
            </li>
            <li>
              <i className="Investor-icon-logout"></i> Log Out
            </li>
          </ul>
        </nav>
      </aside>
      <main className="Investor-main-content">
        <header className="Investor-header">
          <button className="Investor-filter-btn">Other</button>
          <input type="text" className="Investor-search-bar" placeholder="Search" />
        </header>
        <section className="Investor-cards">
          <div className="Investor-card">
            <div className="Investor-profile">
              <img
                src="https://via.placeholder.com/40"
                alt="User"
                className="Investor-profile-pic"
              />
              <div>
                <h4>K.A.D.H. Rajapaksha</h4>
                <p>Mar 12, 2025</p>
              </div>
            </div>
          </div>
          <div className="Investor-card">
            <div className="Investor-profile">
              <img
                src="https://via.placeholder.com/40"
                alt="User"
                className="Investor-profile-pic"
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

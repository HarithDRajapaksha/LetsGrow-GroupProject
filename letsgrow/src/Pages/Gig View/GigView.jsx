// GigView.jsx (modified to work with your existing data structure)
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './gigView.css';

const GigView = () => {
  const { id } = useParams();
  const [gig, setGig] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGig = async () => {
      try {
        const response = await fetch(`/api/gigs/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        const data = await response.json();
        setGig(data);
      } finally {
        setLoading(false);
      }
    };
    fetchGig();
  }, [id]);

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="gig-view-container">
      <header className="gig-header">
        <h1>{gig.startup_name}</h1>
        <div className="gig-meta">
          <span className="industry">{gig.industry}</span>
          <span className="location">{gig.location}</span>
          <time>{new Date(gig.created_at).toLocaleDateString()}</time>
        </div>
      </header>

      <section className="main-content">
        <div className="problem-section">
          <h3>Problem Statement</h3>
          <p>{gig.problemStatement}</p>
        </div>

        <div className="solution-section">
          <h3>Solution Description</h3>
          <p>{gig.solutionDescription}</p>
        </div>

        <div className="investment-details">
          <h3>Investment Details</h3>
          <div className="detail-grid">
            <div>
              <label>Stage:</label>
              <span>{gig.currentStage}</span>
            </div>
            <div>
              <label>Equity Offered:</label>
              <span>{gig.equityOffered}</span>
            </div>
            <div>
              <label>Investment Type:</label>
              <span>{gig.investmentType}</span>
            </div>
          </div>
        </div>

        {gig.feedbacks.length > 0 && (
          <div className="feedback-section">
            <h3>Feedback</h3>
            {gig.feedbacks.map((feedback, index) => (
              <div key={index} className="feedback-card">
                <div className="feedback-header">
                  <span className="company">{feedback.company_name}</span>
                  <span className={`type ${feedback.type}`}>{feedback.type}</span>
                </div>
                <p>{feedback.content}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default GigView;
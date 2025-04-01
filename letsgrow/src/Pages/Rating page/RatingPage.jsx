import React from 'react'
import "./ratingPage.css"

export default function RatingPage() {
  return (
    <div>
      <div id="rating-page-content">
        {/* Top section */}
        <div id="rating-page-top-section">
            <h1 id="rating-page-top-title">RATE FOR US !</h1>
            <h5 id="rating-page-top-details">We've found that customer reviews are very helpful in keeping our  business thriving. We would truly appreciate a review from you!
            Leave a review or comment.</h5>
        </div>

        {/* Middle Section */}
        <div id="rating-page-middle-section">
            {/* left */}
            <div id="rating-page-middle-section-left">
                <div id="rate-us-rating">
                    <span>&#9733;</span>
                    <span>&#9733;</span>
                    <span>&#9733;</span>
                    <span>&#9733;</span>
                    <span>&#9733;</span>
                </div>
                <div id="rating-us-comment-section">
                    <textarea id="rating-page-comment" placeholder="Write a comment..."></textarea>
                </div>
                <button id="submit-rating-button">
                    SUBMIT
                </button>
            </div>
            
            
            {/* right */}
            <div id="rating-page-middle-section-right">
                <div id="rate-us-rate-details">
                    <div id="rate-us-count-details">
                        <h1 id="rate-us-value">4.0</h1>
                    </div>
                    <div id="rate-us-rating-view">
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                    </div>
                </div>

                <div class="rating-bar">
                    <div class="label">Excellent</div>
                        <div class="bar">
                        <div class="fill"></div>
                    </div>
                    <div class="count">2750</div>
                </div>

                <div class="rating-bar">
                    <div class="label">Very Good</div>
                        <div class="bar">
                        <div class="fill"></div>
                    </div>
                    <div class="count">2750</div>
                </div>

                <div class="rating-bar">
                    <div class="label">Average</div>
                        <div class="bar">
                        <div class="fill"></div>
                    </div>
                    <div class="count">2750</div>
                </div>

                <div class="rating-bar">
                    <div class="label">Poor</div>
                        <div class="bar">
                        <div class="fill"></div>
                    </div>
                    <div class="count">2750</div>
                </div>

                <div class="rating-bar">
                    <div class="label">Terrible</div>
                        <div class="bar">
                        <div class="fill"></div>
                    </div>
                    <div class="count">2750</div>
                </div>
                
            </div>
        </div>
      </div>
    </div>
  )
}
 
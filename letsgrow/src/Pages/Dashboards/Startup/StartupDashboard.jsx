import React from 'react'
import './StartupDashboard.css'
import {User, LayoutDashboard, Grid, FileText, Settings, LogOut} from 'lucide-react';

export default function StartupDashboard() {
  return (
    <div className="startup-dashboard">
        {/*Left section*/}
        <div className="startup-dashboard-left-section">
            <div className="startup-dashboard-left-section-logo-name">
                <img src="logo.jpeg" alt="logo" />
                <h1>Startup Name</h1>
            </div>
            <div className="startup-dashboard-left-navigation">
                <div className="startup-dashboard-left-top-section-profile">
                    <div className="startup-left-icon">
                        <User size={30} />
                        <h3>Profile</h3>
                    </div>
                    <div className="startup-left-icon">
                        <LayoutDashboard size={30} />
                        <h3>Dashboard</h3>
                    </div>
                    <div className="startup-left-icon">
                        <FileText size={30} />
                        <h3>Blogs</h3>
                    </div>
                    <div className="startup-left-icon">
                        <Grid size={30} />
                        <h3>Categories</h3>
                    </div>
                </div>

                <div className="startup-dashboard-left-bottom-section-profile">
                    <div className="startup-left-icon">
                        <Settings size={30} />
                        <h3>Settings</h3>
                    </div>
                    <div className="startup-left-icon">
                        <LogOut size={30} />
                        <h3>Log Out</h3>
                    </div>
                </div>
            </div>
        </div>
        {/*Right section*/}
        <div className="startup-dashboard-right-section">
            <div className="startup-dashboard-right-section-content1">
                <button className='startup-others-button'>OTHERS</button>
                <input className="startup-search-bar" type="text" placeholder='Search'/>
            </div>
            <div className="startup-dashboard-right-section-content2">
                <h3>Investors</h3>
                <div className="investors-list">
                    <div className="investors-list-item">
                        <div className="investors-list-item-image">
                            <img src="devinda1.jpg" alt="logo" />
                        </div>
                        <h6 className='startup-investor-name'>Devinda</h6>
                    </div>
                    <div className="investors-list-item">
                        <div className="investors-list-item-image">
                            <img src="devinda1.jpg" alt="logo" />
                        </div>
                        <h6 className='startup-investor-name'>Devinda</h6>
                    </div>
                </div>
            </div>
            <div className="startup-dashboard-right-section-content3">
                <div className="startup-profile-icon-name-date">
                    <div className="investors-list-item-image">
                        <img src="devinda2.jpg" alt="logo" />
                    </div>
                    <h6 className='startup-investor-name'>Devinda</h6>
                    <h6 className='startup-investor-date'>12/12/2021</h6>
                </div>
                <div className='investors-list-item-image'>
                    <img src="devinda1.jpg" alt="logo" />
                </div>
            </div>
        </div>
    </div>
  )
}

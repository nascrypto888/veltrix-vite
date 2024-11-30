// src/components/RecentActivity.js
import React, { useState } from 'react';
import '../styles/RecentActivity.css';
import { BiWallet } from 'react-icons/bi';

const RecentActivity = () => {
    const [showAll, setShowAll] = useState(false);

    const activities = [
        {
            description: "New registration in x3",
            id: "1727925",
            time: "2 mins ago"
        },
        {
            description: "Level 2 upgrade in x4",
            id: "1727814",
            time: "5 mins ago"
        },
        {
            description: "New partner in x3",
            id: "1727792",
            time: "8 mins ago"
        },
        {
            description: "Level 3 completed in x2",
            id: "1727688",
            time: "15 mins ago"
        },
        {
            description: "New registration in x2",
            id: "1727645",
            time: "20 mins ago"
        },
        {
            description: "Level 1 upgrade in x3",
            id: "1727589",
            time: "25 mins ago"
        },
        {
            description: "New partner in x4",
            id: "1727534",
            time: "30 mins ago"
        },
        {
            description: "Level 2 completed in x3",
            id: "1727498",
            time: "35 mins ago"
        },
        {
            description: "New registration in x4",
            id: "1727445",
            time: "40 mins ago"
        },
        {
            description: "Level 1 upgrade in x2",
            id: "1727401",
            time: "45 mins ago"
        }
    ];

    const displayedActivities = showAll ? activities : activities.slice(0, 6);

    return (
        <div className="recent-activity-container">
            <h2>Platform Recent Activity</h2>
            <div className="activity-list">
                {displayedActivities.map((activity, index) => (
                    <div className="activity-item" key={index}>
                        <div className="activity-icon">
                            <BiWallet size={24} />
                        </div>
                        <div className="activity-content">
                            <span className="activity-description">{activity.description}</span>
                            <a href={`/user/${activity.id}`} className="activity-id">ID {activity.id}</a>
                            <span className="activity-time">{activity.time}</span>
                        </div>
                    </div>
                ))}
            </div>
            <button 
                className="see-more-btn" 
                onClick={() => setShowAll(!showAll)}
            >
                {showAll ? 'Show Less' : 'See More'}
            </button>
        </div>
    );
};

export default RecentActivity;

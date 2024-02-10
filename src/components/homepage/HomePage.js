import './HomePage.css';
import icon from "../../assets/notification.png";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {

    const navigate = useNavigate();

    return (
        <div>
            <div className="notification-container grid">
                <img 
                    src={icon} 
                    alt="" 
                    className="notification-img" 
                    onClick={() => navigate(`/vday/mail`)}
                />
                <h1> You got mail! </h1>
            </div>
        </div>
    )
}
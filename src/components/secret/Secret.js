import './Secret.css';
import icon from "../../assets/secret.jpeg";
import React, { useState } from "react";

export default function Secret() {

    return (
        <div>
            <div className="notification-container grid">
                <img 
                    src={icon} 
                    alt="" 
                    className="notification-img" 
                />
            </div>
        </div>
    )
}
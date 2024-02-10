import './Reservation.css';
import icon from "../../assets/notification.png";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Confetti from 'react-confetti'

export default function Reservation() {

    const navigate = useNavigate();

    return (
        <div>
            <Confetti
                className="confetti"
            />
            <div className="box grid">
                <h1>Reservation Confirmed!</h1>
                <h2> Sushi Dairo </h2>
                <h3> February 14, 2024 @ 5:15PM</h3>
                <h3 className='special' onClick={() => navigate(`/secret`)}> Click Here to view Valentines Day Gift</h3>
            </div>
        </div>
    )
}
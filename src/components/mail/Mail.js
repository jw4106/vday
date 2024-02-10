import './Mail.css';
import React, { useState } from "react";
import icon from "../../assets/duck.png";
import { useNavigate } from "react-router-dom";

export default function Mail() {

    const navigate = useNavigate();

    const [noText, setNoText] = useState('No');
    const [buttonWidth, setButtonWidth] = useState(15)
    const [yesText, setYesText] = useState('Yes');
    const [visibility, setVisibility] = useState('visible');
    const [duckVisibility, setDuckVisibility] = useState('hidden');

    const words = [
        "Are you sure?",
        "Try Again",
        "Really???",
        "Last Try...",
        "Why???",
        "Bruhh",
        "Please??",
        "</3",
        "????"
    ]

    function getRandomInt() {
        return Math.floor(Math.random() * 9);
    }
    
    function handleClick() {
        setNoText(words[getRandomInt()]);
        setButtonWidth(buttonWidth+1)
        setYesText(yesText.toUpperCase() + "!")
        if(buttonWidth >= 25) {
            setYesText("YES - STOP PLAYIN")
            setVisibility("hidden")
            setDuckVisibility("visible")
        }
    }

    return (
        <div>
            <div className="box grid">
                <h1 class="inner-box"> From: Jevons</h1>
                <h1>Will you be my</h1>
                <h1 className='pretty'>Valentines?</h1>
                <div className="horizontal-center"> 
                    <button 
                        className="yes-button"
                        style={{width: buttonWidth + "%"}}
                        onClick={() => navigate(`/reservation`)}
                    >
                        {yesText}
                    </button>
                    <button
                    className="no-button"
                    style={{visibility:visibility}}
                    onClick={handleClick}>
                        {noText}
                    </button>
                </div>
                <img 
                    src={icon} 
                    alt=""
                    style={{visibility:duckVisibility}}
                    className="duck"
                />
            </div>
        </div>
    )
}
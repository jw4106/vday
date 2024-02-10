import logo from "../../assets/logo.png";
import logo2 from "../../assets/inbox.png"
import './Login.css';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [password, setPassword] = useState("")
    const [passwordError1, setPasswordError1] = useState("")
    const [passwordError2, setPasswordError2] = useState("")

    const navigate = useNavigate();
        
    const onButtonClick = () => {
        if (password.replace(/\s+/g,'').toLowerCase() !== 'kenji') {
            setPasswordError1("Password Incorrect.")
            setPasswordError2("Hint: Pet's name")
        } else {
            navigate(`/inbox`)
        }
    }
    
    return (
        <div>
            <div className="logo-container grid">
                <img src={logo} alt="" className="logo-img" />
                <img src={logo2} alt="" className="inbox-img" />
                <div className={"inputContainer"}>
                    <p>Username</p>
                    <input
                        value="Lolo"
                        placeholder="Username"
                        className={"inputBox"} />
                </div>
                <br />
                <div className={"inputContainer"}>
                    <p>Password: </p>
                    <input
                        value={password}
                        placeholder="Password"
                        onChange={ev => setPassword(ev.target.value)}
                        className={"inputBox"} />
                    <label className="errorLabel">{passwordError1}</label>
                    <label className="hintLabel">{passwordError2}</label>
                </div>
                <div className={"inputContainer"}>
                    <input
                        className={"inputButton"}
                        type="button"
                        onClick={onButtonClick}
                        value={"Login"} />
                </div>
            </div>
        </div>
        
    )
}
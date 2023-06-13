import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';


function SignUp() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSignUp = (e) => {
        e.preventDefault();

        axios.post('https://covid-vaccine-ch76.vercel.app/covidv/signup/user', { email, password })
            .then(response => {

                console.log('Signup successful');

                navigate('/user/panel');
            })
            .catch(error => {

                console.error('Signup error:', error);
            });
    };

    return (
        <div>

            <div classname="auth-wrapper">
                <div className="auth-inner">

                    <form onSubmit={handleSignUp}>
                        <h2>SIGN UP</h2>
                        <div>
                            <div className="inside">
                                <label>Email:</label>
                                <input className="form-control" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                        </div>
                        <div>
                            <div className="inside">
                                <label>Password:</label>
                                <input className="form-control" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            </div>
                        </div>
                        <button type="submit" className='bt'>SIGN UP</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;


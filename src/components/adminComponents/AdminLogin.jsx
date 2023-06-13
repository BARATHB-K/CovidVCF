import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './logadmin.css';



function AdminLogin() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSignUp = (e) => {
        e.preventDefault();

        axios.post('https://covid-vaccine-ch76.vercel.app/covidv/login/admin', { email, password })
            .then((data) => {
                console.log(data, "userRegister");
                if (data.data.status === "ok") {
                    alert("login successful");
                    //window.localStorage.setItem("token", data.data);
                    navigate('/admin/panel');
                } else {
                    alert("Please Enter the valid credentials");
                }
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
                        <h2>LOG IN - ADMIN</h2>
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
                        <button type="submit" className='bt'>LOG IN</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AdminLogin;



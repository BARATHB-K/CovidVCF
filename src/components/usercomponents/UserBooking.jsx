import React, { useState } from 'react';

import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import './Login.css';



function UserBooking() {


    const id = useParams().id;

    const navigate = useNavigate();

    const [centre, setCenter] = useState('');
    const [date, setDate] = useState('');

    const sendRequest = async () => {

        await axios
            .put(`https://covid-vaccine-ch76.vercel.app/covidv/users/dosageDec/${id}`)
            .then(() => console.log("Dosage"));
    };

    const idv = String(id);

    const handleSignUp = (e) => {
        e.preventDefault();
        sendRequest().then(() => console.log("updated"));

        axios.post('https://covid-vaccine-ch76.vercel.app/covidv/user/book-slot', { idv, centre, date })
            .then((data) => {

                console.log(data, "Booking");
                if (data.data.status === "ok") {
                    alert("Booking successful");

                    navigate('/user/home');
                } else if (data.data.status === "notok") {
                    alert("Booking is Full !! Choose Different date");
                }
            })
            .catch(error => {

                console.error('Error:', error);
            });
    };

    return (
        <div>

            <div classname="auth-wrapper">
                <div className="auth-inner">

                    <form onSubmit={handleSignUp}>
                        <h2>BOOKING VACCINE</h2>
                        <div>
                            <div className="inside">
                                <label>CENTER:</label>
                                <input className="form-control" type="text" value={centre} onChange={(e) => setCenter(e.target.value)} required />
                            </div>
                        </div>
                        <div>
                            <div className="inside">
                                <label>Date:</label>
                                <input className="form-control" type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
                            </div>
                        </div>
                        <button type="submit" className='bt'>CONFIRM</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UserBooking;


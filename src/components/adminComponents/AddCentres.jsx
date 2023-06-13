import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './logadmin.css';



function AddCentres() {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [workingHours, setWorkingHours] = useState('');
    const [dosage, setDosage] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();

        axios.post('https://covid-vaccine-ch76.vercel.app/covidv/admin/addCentres', { name, address, workingHours, dosage })
            .then(response => {

                console.log('Added successful');

                navigate('/admin/panel');
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
                        <h2>ADD CENTER</h2>
                        <div>
                            <div className="inside">
                                <label>Name:</label>
                                <input className="form-control" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                            </div>
                        </div>
                        <div>
                            <div className="inside">
                                <label>Address:</label>
                                <input className="form-control" type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
                            </div>
                        </div>

                        <div>
                            <div className="inside">
                                <label>WorkingHours:</label>
                                <input className="form-control" type="text" value={workingHours} onChange={(e) => setWorkingHours(e.target.value)} required />
                            </div>
                        </div>

                        <div>
                            <div className="inside">
                                <label>Dosage:</label>
                                <input className="form-control" type="number" value={dosage} onChange={(e) => setDosage(e.target.value)} required />
                            </div>
                        </div>

                        <button type="submit" className='bt'>ADD CENTER</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddCentres;


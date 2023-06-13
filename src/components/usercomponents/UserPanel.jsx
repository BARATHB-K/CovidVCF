import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

//  https://covid-vaccine-ch76.vercel.app/  --> http://localhost:5000
import "./UserPanel.css";
const URL = "https://covid-vaccine-ch76.vercel.app/covidv/user/vaccination-centres";
const fetchHandler = async () => {
    return await axios.get(URL).then((res) => res.data);
};

const URL1 = "https://covid-vaccine-ch76.vercel.app/covidv/user/logout";
const logout = async () => {
    return await axios.get(URL1).then(() => console.log("Log Out"));
};


const UserPanel = () => {

    const [books, setBooks] = useState();



    useEffect(() => {
        fetchHandler().then((data) => setBooks(data.vaccinationCentres));
    }, []);

    console.log(books);
    return (
        <div className="head">
            <div className="cen">
                <div>
                    <h1> VACCINATAION CENTRES</h1>
                    <Button size="medium" onClick={logout} LinkComponent={Link}
                        to={`/user/home`}> LOGOUT</Button>
                </div>

            </div>


            <div className="grid-container">


                {books && books.map((book) => (
                    <div className="grid-item">
                        <Card sx={{ maxWidth: 325 }}>

                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {book.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Address:{book.address}

                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    WorkingHours:{book.workingHours}

                                </Typography>


                            </CardContent>
                            <CardActions>
                                <Button size="small" LinkComponent={Link}
                                    to={`/user/book/${book._id}`}>BOOK</Button>

                            </CardActions>

                        </Card>
                    </div>

                ))}
            </div>
        </div>

    );

};

export default UserPanel;






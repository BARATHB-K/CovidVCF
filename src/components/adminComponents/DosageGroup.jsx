import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';


import "./Panel.css";
const URL = "https://covid-vaccine-ch76.vercel.app/covidv/admin/dosage-details";
const fetchHandler = async () => {
    return await axios.get(URL).then((res) => res.data);
};


const DosageGroup = () => {

    const [books, setBooks] = useState();



    useEffect(() => {
        fetchHandler().then((data) => setBooks(data.dosageDetails));
    }, []);

    console.log(books);
    return (
        <div className="head">
            <div className="cen">
                <div>
                    <h1>DETAILS OF ALL THE DOSAGE -GROUPBY </h1>

                </div>

            </div>


            <div className="grid-container">


                {books && books.map((book) => (
                    <div className="grid-item">
                        <Card sx={{ maxWidth: 325 }}>

                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    CENTER : {book._id}
                                </Typography>
                                <Typography gutterBottom variant="h5" component="div">
                                    DOSAGE : {book.totalDosage}
                                </Typography>



                            </CardContent>
                            <CardActions>
                                <Button size="small" LinkComponent={Link} to={'/admin/panel'}>PANEL</Button>

                            </CardActions>

                        </Card>
                    </div>

                ))}
            </div>
        </div>

    );

};

export default DosageGroup;






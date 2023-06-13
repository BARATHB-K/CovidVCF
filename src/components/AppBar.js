import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar } from "@mui/material";

import { NavLink } from "react-router-dom";

const Header = () => {
    const [value, setValue] = useState();
    return (
        <div>
            <AppBar sx={{ backgroundColor: "blue" }} position="sticky">
                <Toolbar>

                    <Tabs
                        sx={{ ml: "auto" }}
                        textColor="yellow"
                        indicatorColor="primary"
                        value={value}
                        onChange={(e, val) => setValue(val)}
                    >

                        <Tab LinkComponent={NavLink} to="/user/home" label="Home" />
                        <Tab LinkComponent={NavLink} to="/user/login" label="Login" />

                        <Tab LinkComponent={NavLink} to="/user/signup" label="Signup" />


                        <Tab LinkComponent={NavLink} to="/admin/login" label="Admin" />
                    </Tabs>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;

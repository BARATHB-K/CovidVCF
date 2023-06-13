import React from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';

import Header from "./components/AppBar";
import Login from "./components/usercomponents/Login";
import Signup from "./components/usercomponents/Signup";
import AdminLogin from "./components/adminComponents/AdminLogin";
import Home from "./components/Home";
import Panel from "./components/adminComponents/Panel";
import AddCentres from "./components/adminComponents/AddCentres";
import DosageGroup from "./components/adminComponents/DosageGroup";

import UserBooking from "./components/usercomponents/UserBooking";

import UserPanel from "./components/usercomponents/UserPanel";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>

      <main>
        <Routes>
          <Route path="/user/home" element={<Home />} exact />

          <Route path="/user/login" element={<Login />} exact />
          <Route path="/user/signup" element={<Signup />} exact />
          <Route path="/user/panel" element={<UserPanel />} exact />
          <Route path="/user/book/:id" element={<UserBooking />} exact />

          <Route path="/admin/login" element={<AdminLogin />} exact />
          <Route path="/admin/panel" element={<Panel />} exact />
          <Route path="/admin/addCentres" element={<AddCentres />} exact />
          <Route path="/admin/dosage-details" element={<DosageGroup />} exact />

        </Routes>
      </main>
    </div>
  );
}

export default App;

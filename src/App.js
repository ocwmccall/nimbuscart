import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import { useAuthContext } from "./hooks/useAuthContext";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import MyLists from "./pages/MyLists";
import MoveItems from "./pages/MoveItems";
import FindItem from "./pages/FindItem";
import ForgotPassword from "./pages/ForgotPassword";
import Header from "./components/Header";
import ListEditor from "./pages/ListEditor";
import Footer from "./components/Footer";
import styled from "styled-components";

const Centered = styled.div`
  .cfb{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

`

export default function App() {
  const { user, authIsReady } = useAuthContext();

  return (  
       <div>
      {authIsReady && (
        <Router>
          <Header />
          <Routes>
            <Route
              path="/"
              element={user ? <MyLists /> : <Navigate to="/login" />}
            />
            {/* <Route
              path="/signup"
              //   element={!user ? <Signup /> : <Navigate to="signup" />}
            /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/mylists" element={<MyLists user={user}/>} />
            <Route path="/listeditor" element={<ListEditor />} />
            <Route path="/finditem" element={<FindItem />} />
            <Route path="/Moveitems" element={<MoveItems />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
          </Routes>
          <Footer />
        </Router>
      )}
    </div>   
  );
}
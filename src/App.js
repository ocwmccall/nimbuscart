import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route, Navigate  } from "react-router-dom";
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

export default function App() {
	const { user, authIsReady } = useAuthContext();

	return (
		<>
			{authIsReady && (
				<Router>
					<Header />
					<Routes>
						<Route path="/" element={< MyLists />} />
						<Route path="/signup" element={!user ? <Signup /> : <Navigate to="/login" />} />
						<Route path="/login" element={user ? <MyLists /> : <Navigate to="login" />} />
						<Route path="/mylists" element={ user ? <MyLists /> : < Navigate to="login" />} />
						<Route path="/listeditor" element={ user ? <ListEditor /> : <Navigate to="login" />} />
						<Route path="/finditem" element={  user ? <FindItem /> : <Navigate to="login" />} />
						<Route path="/Moveitems" element={ user ? <FindItem /> : <Navigate to="login" />} />
						<Route path="/forgotpassword" element={<ForgotPassword />} />
					</Routes>
				</Router>
			)}
		</>
	);
}

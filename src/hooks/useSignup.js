import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuthContext } from "./useAuthContext";

import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const useSignup = () => {
	const navigate = useNavigate()
	const [error, setError] = useState(null);
	const { dispatch } = useAuthContext();

	const signup = (email, password) => {
		setError(null);

		createUserWithEmailAndPassword(auth, email, password)
			.then((res) => {
				dispatch({ type: "LOGIN", payload: res.user });
				navigate("/login")
				console.log("user signed up:", res.user);
			})
			.catch((err) => {
				setError(err.message);
			});
	};

	return { error, signup };
};

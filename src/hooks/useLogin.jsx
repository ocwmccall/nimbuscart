import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from "../hooks/useAuthContext";

import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export const useLogin = () => {
	const [error, setError] = useState(null);
	const { dispatch } = useAuthContext();
	const navigate = useNavigate();

	console.log(signInWithEmailAndPassword);

	const login = (email, password) => {
		setError(null);

		signInWithEmailAndPassword(auth, email, password)
			.then((res) => {
				dispatch({ type: "LOGIN", payload: res.user });
				console.log("user signed up:", res.user);
				navigate("/mylists")
			})
			.catch((err) => {
				setError(err.message);
			});
	};

	return { error, login };
};

import React, { useState } from "react";
import { useLogin } from "../hooks/useLogin";



const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { error, login } = useLogin();

	const handleSubmit = (e) => {
		e.preventDefault();
		login(email, password);
	};

	return (
		<div className="container">
			
			<form className="center" onSubmit={handleSubmit}>
				<div>
					<label>
					<span>email:</span>
					<input
						required
						type="email"
						onChange={(e) => setEmail(e.target.value)}
						value={email}
					/>
				</label>
				</div>
				<div>
				<label>
					<span>password:</span>
					<input
						required
						type="password"
						onChange={(e) => setPassword(e.target.value)}
						value={password}
					/>
				</label>
				</div>
				<button style={{
                  borderRadius: 25,
                  backgroundColor:"#613cf5",
                  padding: "18px 36px",
                  fontSize: "25px",
                  color: "#f2fafc",
                }}>Login</button>
				{error && <p>{error}</p>}
			</form>
		</div>
	);
};

export default Login;

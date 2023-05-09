import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useLogin } from "../hooks/useLogin";
import ForgotPassword from "./ForgotPassword";
import styled from "styled-components";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, login } = useLogin();
  const navigate = useNavigate();

  const handleSubmit = (e) => {

    e.preventDefault();
    login(email, password);
  };

  return (
    <Styling>
        <div className="container">
          <div className="filler"></div>
          <form className="center" onSubmit={handleSubmit}>
            <div>
              <h2>Login</h2>
            <fieldset>
              <label className="form-label">
                email
              </label>
              <input
                required
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="form-input"
              />      
            </fieldset>
            <fieldset>
              <label className="form-label">
                password
              </label>
              <input
                required
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="form-input"
              />
            </fieldset>
                      
            </div>
            <div>
              
            </div>
            <div className="buttons">
                <button id="login" >
                  Login
                </button>            
                <div>
                  <button>Forgot Password</button>
                </div>
            </div>
            {error && <p>{error}</p>}
          </form>
        </div>
    </Styling>    
  );
};


const Styling = styled.div`
background: rgba(24, 138, 178, .2);

.container {
  display: flex;
  height: 100vh;
}

.filler {
  flex: 1;
  background-image: url('https://images.pexels.com/photos/5717421/pexels-photo-5717421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  background-size: cover;
}

h2 {
  font-size: 2.7rem;
  padding-bottom: 1rem
}

form {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

form fieldset {
  border: none;
  margin: 0;
  padding: 0;
  width: 400px;
}

.form-label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  letter-spacing: .5px;
}

.form-input:hover{
  border-bottom: 2px solid #ef476f;
}

#login {
  margin-left: 1rem;
  margin-right: 1rem;
}

.buttons {
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: .7rem;
  font-weight: bold;
}

.buttons button {
  width: 200px;
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  background-color: #ffd166;
  color: #fff;
  border: none;
}

.buttons button:hover {
  background: #ef476f;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease-in-out
}
.form-input{
  width: 100%;
  padding: 5px 10px;
  border-bottom: 1px solid #3d3935;
  border-radius: 4px;
  background-color: #fff;
  color: #3d3935;
  outline: 0;
  transition: all 0.5s linear;
}
`

export default Login;

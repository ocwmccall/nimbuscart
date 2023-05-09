import React, { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import ForgotPassword from "./ForgotPassword";
import { Navigate, useNavigate } from "react-router";
import '../index.css';
import profile from "../images/userImage.png";
import email from "../images/email.png";
import pass from "../images/password.png";


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
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={profile} alt="profile" className="profile"/>

            </div>

          </div>
          <div>
            <h1>Login Page</h1>
            <div>
              <img src={email} alt="email" className="email"/>
              <input type="text" placeholder="email" className="name"/>
            </div>
            <div className="second-input">
              <img src={pass} alt="pass" className="email"/>
              <input type="password" placeholder="password" className="name"/>
            </div>
            {/* <div className="login-button"> */}
            <button>Login</button>
          </div>

            <p className="link">
              <a href="#">Forgoot password ?</a> Or<a href="#">Sign Up</a>
            </p>
        </div>

      </div>
    </div>
  )





  // return (
  //   <div className="container">
  //     <div className="sub-main">
        
  //     </div>
  //     <form className="center" onSubmit={handleSubmit}>
  //       <div>
  //         <label>
  //           <span>email:</span>
  //           <input
  //             required
  //             type="email"
  //             onChange={(e) => setEmail(e.target.value)}
  //             value={email}
  //           />
  //         </label>
  //       </div>
  //       <div>
  //         <label>
  //           <span>password:</span>
  //           <input
  //             required
  //             type="password"
  //             onChange={(e) => setPassword(e.target.value)}
  //             value={password}
  //           />
  //         </label>
  //       </div>
  //       <button
  //         style={{
  //           borderRadius: 25,
  //           backgroundColor: "#613cf5",
  //           padding: "18px 36px",
  //           fontSize: "25px",
  //           color: "#f2fafc",
  //         }}
  //       >
  //         Login
  //       </button>
  //       {error && <p>{error}</p>}
  //       <div>
  //         <button onClick={() => navigate("/forgotpassword")}>Forgot Password</button>
  //       </div>
  //     </form>
  //   </div>
  // );
};

export default Login;

import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import "./signup.css";
import { Button } from "@material-ui/core";

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(userCredential);
        console.log(user);
        navigate("/login");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setMessage(errorMessage);
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <main>
      <section>
        <div>
          <div>
            <form>
              <div>
                <label htmlFor="email-address">Email address </label>
                <input
                  type="email"
                  label="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder=""
                />
              </div>

              <div>
                <label htmlFor="password">Password </label>
                <input
                  type="password"
                  label="Create password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Password"
                />
              </div>

              <Button
                style={{
                  borderRadius: 25,
                  backgroundColor: "#96a0fa",
                  padding: "18px 36px",
                  fontSize: "18px",
                  color: "#f2fafc",
                }}
                variant="contained"
                type="submit"
                onClick={onSubmit}
              >
                Sign up
              </Button>
            </form>

            <p>
              Already have an account?{" "}
              <NavLink
                style={{
                  color: "#f2fafc",
                  backgroundColor: "#96a0fa",
                  borderRadius: 5,
                }}
                to="/login"
              >
                Sign in
              </NavLink>
            </p>

            {/* Syntax: condition ? <expression if true> : <expression if false> */}

            {message.length == 0 ? <p></p> : <p>{message}</p>}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Signup;
